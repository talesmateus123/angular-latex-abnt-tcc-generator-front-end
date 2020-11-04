import { Component, OnInit } from '@angular/core';
import { DocumentService as Service } from 'src/app/services/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {
  public document: any;

  constructor(
    private service: Service,
    private router: Router
  ) { }

  ngOnInit() {

  }
  create() {

  }

  cancel() {
    this.router.navigate(['/']);
  }
}
