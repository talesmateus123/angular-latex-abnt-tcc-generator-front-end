//default
import { Injectable } from '@angular/core';
//app
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Document } from 'src/app/models/document'

@Injectable({
  providedIn: 'root'
})
export class PartitionService {
  private url = 'http://localhost:8080/api/partition';
  constructor(private http:HttpClient) { }

  getPartitionsByDocument(documentId):Observable<Document[]>{
    const _url = `${this.url}/documento/${documentId}`
    return this.http.get<Document[]>(this.url);
  }
  getPartition(id:string):Observable<Document>{
    const _url = `${this.url}/${id}`
    return this.http.get<Document>(_url);
  }
  createPartition(request : Document):Observable<Document>{
    return this.http.post<Document>(this.url, request);
  }
  updatePartition(id:string, request: Document):Observable<Document>{
    const _url = `${this.url}/${id}`
    return this.http.put<Document>(_url, request);
  }
  deletePartition(id:string):Observable<any>{
    const _url = `${this.url}/${id}`
    return this.http.delete<any>(_url);
  }
}
