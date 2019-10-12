import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { DocumentService } from 'src/app/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-delete',
  templateUrl: './document-delete.component.html',
  styleUrls: ['./document-delete.component.css']
})
export class DocumentDeleteComponent implements OnInit {
  id: string
  document:Document
  constructor(private documentService:DocumentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.documentService.getDocument(this.id).subscribe(
      res => {
        this.document = res
      }
    )
  }
  delete(){
    this.documentService.deleteDocument(this.id).subscribe(
      res => {
        alert('Removido com sucesso!')
        this.cancel()
      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }
}
