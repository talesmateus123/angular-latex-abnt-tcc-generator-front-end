import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  private url = 'http://localhost:8080/api/document';

  constructor(private http: HttpClient) { }

  getDocuments() { }

  getDocument(id: string) { }

  createDocument(request: any) { }

  updateDocument(id: string, request: any) { }

  deleteDocument(id: string) { }
}
