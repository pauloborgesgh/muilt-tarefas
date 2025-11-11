import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListService {

  // search term observable
  private _search$ = new BehaviorSubject<string>('');
  readonly search$ = this._search$.asObservable();

  constructor() { }

  setSearch(term: string) {
    this._search$.next(term ?? '');
  }

}
