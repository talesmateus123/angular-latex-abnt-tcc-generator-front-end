import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DocumentService as Service } from '../shared/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-document',
  templateUrl: './info-document.component.html',
  styleUrls: ['./info-document.component.css']
})
export class InfoDocumentComponent implements OnInit {
  private items: MenuItem[];

  public document: any;
  private id: string;

  constructor(
    private service: Service,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.document = this.service.get(this.id);
  }

  update() {
    this.service.update(this.id, this.document);
    this.cancel();
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
