import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Document } from './../models/document';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  private url = `${environment.baseApiUrl}/document`;

  constructor(private http: HttpClient, private storage: StorageService) { }

  getAll(): Document[] {
    return this.storage.getAll();
  }

  get(id: string): Document {
    return this.storage.get(id);
  }

  save(document: Document) {
    this.storage.save(document);
  }

  update(id: string, document: Document) {
    this.storage.update(id, document);
  }

  remove(id: string) {
    this.storage.remove(id);
  }

}
