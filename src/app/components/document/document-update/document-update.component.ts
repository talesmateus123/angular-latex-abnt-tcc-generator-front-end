import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { DocumentService } from 'src/app/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.css']
})
export class DocumentUpdateComponent implements OnInit {
  items: MenuItem[];
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

    this.items = [
      { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
      { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
      { label: 'Documentation', icon: 'fa fa-fw fa-book' },
      { label: 'Support', icon: 'fa fa-fw fa-support' },
      { label: 'Social', icon: 'fa fa-fw fa-twitter' }
    ];
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
