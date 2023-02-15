import { MediaFeature } from './types';

/**
 * Queries the window for all possible values matching the given feature.
 * @param feature A media query feature name.
 * @param params The possible feature values.
 * @returns The matching value.
 */
export function getMediaFeatureValue<T extends string = MediaFeature, V extends string = string>(feature: T, params: V[]): V {
  for (const param of params) {
    const query = window.matchMedia(`(${feature}: ${param})`);
    if (query.matches) {
      return param;
    }
  }
  // We can assume that at least one query will match, this fallback is mostly to satisfy TypeScript
  console.warn(`No media query returned a match ${feature}, falling back to ${params[0]}.`)
  return params[0];
}
