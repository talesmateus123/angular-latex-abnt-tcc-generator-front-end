//default
import { Injectable } from '@angular/core';
//app
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Document } from 'src/app/models/document'
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private url = 'http://localhost:8080/api/document';
  constructor(private http:HttpClient) { }

  getDocuments():Observable<Document[]>{
    return this.http.get<Document[]>(this.url);
  }
  getDocument(id:string):Observable<Document>{
    const _url = `${this.url}/${id}`
    return this.http.get<Document>(_url);
  }
  createDocument(request : Document):Observable<Document>{
    return this.http.post<Document>(this.url, request);
  }
  updateDocument(id:string, request: Document):Observable<Document>{
    const _url = `${this.url}/${id}`
    return this.http.put<Document>(_url, request);
  }
  deleteDocument(id:string):Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.delete<any>(_url);
  }
}
