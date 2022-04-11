import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJournal } from './types';

@Injectable()
export class JournalService {
  constructor(private _http: HttpClient) {}

  public getJournals(): Observable<IJournal[]> {
    return this._http.get('assets/journals.json') as Observable<IJournal[]>;
  }
}
