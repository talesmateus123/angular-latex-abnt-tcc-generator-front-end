//default
import { Injectable } from '@angular/core';
//app
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/models/person'
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url = 'http://localhost:8080/api/person';
  constructor(private http:HttpClient) { }

  getPeople():Observable<Person[]>{
    return this.http.get<Person[]>(this.url);
  }
  getPerson(id:string):Observable<Person>{
    const _url = `${this.url}/${id}`
    return this.http.get<Person>(_url);
  }
  createPerson(request : Person):Observable<Person>{
    return this.http.post<Person>(this.url, request);
  }
  updatePerson(id:string, request: Person):Observable<Person>{
    const _url = `${this.url}/${id}`
    return this.http.put<Person>(_url, request);
  }
  deletePerson(id:string):Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.delete<any>(_url);
  }
}
