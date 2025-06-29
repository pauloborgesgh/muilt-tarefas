import { Injectable } from '@angular/core';
import { Animal } from '../../Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http:HttpClient) { }



  remove(animals: Animal[], animal: Animal){
   console.log(`Animal ${animal.name} removido com sucesso!`)
   return animals.filter((a) => animal.name !== a.name)
  }
  getAll():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl)
  }
  getItem(id:number):Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
