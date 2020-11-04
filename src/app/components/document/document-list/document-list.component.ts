import { Component, OnInit } from '@angular/core';
import { DocumentService as Service } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  public documents: any[];

  constructor(private service: Service) { }

  ngOnInit() {
  }

}
