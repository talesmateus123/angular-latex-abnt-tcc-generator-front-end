import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-generate-output',
  templateUrl: './document-generate-output.component.html',
  styleUrls: ['./document-generate-output.component.css']
})
export class DocumentGenerateOutputComponent implements OnInit {
  @Input() public document: any;

  constructor() { }

  ngOnInit() {

  }

  generateLatex() {

  }

  generatePdf() {

  }
}
