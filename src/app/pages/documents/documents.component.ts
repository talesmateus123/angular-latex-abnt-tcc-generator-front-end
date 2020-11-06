import { Component, OnInit } from '@angular/core';

import { DocumentService as Service } from './shared';
import { Document } from './shared';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  public documents: Document[];

  constructor(private service: Service) { }

  ngOnInit() {
    this.documents = this.service.getAll();
  }

  delete(id: string) {
    this.service.remove(id);
    this.documents = this.service.getAll();
  }

}
