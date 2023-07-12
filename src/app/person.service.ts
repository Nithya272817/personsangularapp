import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
 private url:string;
  constructor(private http: HttpClient) { 
    this.url="https://jsonplaceholder.typicode.com/users"
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  
}
