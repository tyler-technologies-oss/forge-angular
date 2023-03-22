import { Subject } from '../observable';
import { getMediaFeatureValue } from './media-observer-utils';
import { mediaFeatureValues, MediaFeature, MediaQueryListItem, MediaQueryHandler } from './types';

/**
 * A Subject that tracks the value of a specified media feature and exposes it synchronously and
 * asynchronously.
 */
export class MediaObserver<T extends string = MediaFeature, V extends string = string> extends Subject<any> {

  /**
   * STATIC MEMBERS
   */

  /** A collection of all managed media observers. */
  private static _observers: { [key: string]: any } = {};

  /** Returns a new media observer tracking the given feature. */
  public static observe<A extends string = MediaFeature, B extends string = string>(feature: A, params?: B[], createNew = false): MediaObserver<A, B> {
    const existing = MediaObserver._observers[feature];
    if (existing && !createNew) {
      return existing;
    }

    const resolvedParams = params ?? mediaFeatureValues[feature as keyof typeof mediaFeatureValues] ?? [];
    const observer = new MediaObserver<A, any>(feature, resolvedParams);
    MediaObserver._observers[feature] = observer;
    return observer;
  }

  /**
   * INSTANCE MEMBERS
   */

  /** The name of the tracked media feature. */
  public feature: T;
  /** Possible values of the tracked media feature. */
  private _params: V[];
  /** Tracked media queries and handler functions. */
  private _queries: MediaQueryListItem[] = [];

  constructor(feature: T, params: V[]) {
    const initialValue = getMediaFeatureValue(feature, params);
    super(initialValue);

    this.feature = feature;
    this._params = params;
    this._attachMediaQueries();
  }

  public destroy(): void {
    for (const item of this._queries) {
      item.query.removeEventListener('change', item.handler);
    }
    this._queries = [];
    delete MediaObserver._observers[this.feature];
  }

  private _attachMediaQueries(): void {
    this._queries = this._params.map(param => {
      const query = window.matchMedia(`(${this.feature}: ${param})`);
      const handler: MediaQueryHandler = (event) => this._setValue(event, param);
      handler(query);
      query.addEventListener('change', handler);
      return { query, handler };
    });
  }

  private _setValue(value: MediaQueryList | MediaQueryListEvent, name: V): void {
    if (!value.matches) {
      return;
    }
    this._next(name);
  }
}
