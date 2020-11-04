import { Component, OnInit } from '@angular/core';
import { DocumentService as Service } from '../shared/services/document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css']
})
export class NewDocumentComponent implements OnInit {
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
