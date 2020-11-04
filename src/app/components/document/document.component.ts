import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DocumentService as Service } from 'src/app/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
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
