import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'


  constructor(private http:HttpClient) { }



}
