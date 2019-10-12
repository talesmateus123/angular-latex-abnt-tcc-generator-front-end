import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
//app'
import { Document } from 'src/app/models/document'

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  private documents:Document[]
  constructor(private documentService:DocumentService) { }

  ngOnInit() {
    this.documentService.getDocuments().subscribe(
      res => {
        this.documents=res
      }
    )
  }

}
