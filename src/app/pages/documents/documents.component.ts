import { Component, OnInit } from '@angular/core';
import { DocumentService as Service } from './shared/services/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  public documents: any[];

  constructor(private service: Service) { }

  ngOnInit() {
  }

}
