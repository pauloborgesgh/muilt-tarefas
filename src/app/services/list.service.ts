import { Injectable } from '@angular/core';
<<<<<<< HEAD

import { HttpClient } from '@angular/common/http';
=======
import { BehaviorSubject, Observable } from 'rxjs';
>>>>>>> develop



@Injectable({
  providedIn: 'root'
})
export class ListService {
<<<<<<< HEAD
  private apiUrl = 'http://localhost:3000/animals'

=======
>>>>>>> develop

  // search term observable
  private _search$ = new BehaviorSubject<string>('');
  readonly search$ = this._search$.asObservable();

  constructor() { }

<<<<<<< HEAD
=======
  setSearch(term: string) {
    this._search$.next(term ?? '');
  }
>>>>>>> develop

}
