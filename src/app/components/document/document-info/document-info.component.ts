import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { DocumentService } from 'src/app/services/document.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-document-info',
  templateUrl: './document-info.component.html',
  styleUrls: ['./document-info.component.css']
})
export class DocumentInfoComponent implements OnInit {
  private document:Document
  private id:string
  constructor(private documentService:DocumentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.documentService.getDocument(this.id).subscribe(
      res => {
        this.document = res
      }
    )
  }

}
