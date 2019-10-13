import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { DocumentService } from 'src/app/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.css']
})
export class DocumentUpdateComponent implements OnInit {
  private document:Document
  private id:string
  constructor(private documentService:DocumentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.documentService.getDocument(this.id).subscribe(
      res => {
        this.document = res
      }
    )
  }
  update(){
    this.documentService.updateDocument(this.id, this.document).subscribe(
      res => {
        alert('Atualizado com sucesso!')
      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }
}
