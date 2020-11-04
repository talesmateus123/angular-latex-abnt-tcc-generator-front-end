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

  }

  cancel() {
    this.router.navigate(['/']);
  }
}
