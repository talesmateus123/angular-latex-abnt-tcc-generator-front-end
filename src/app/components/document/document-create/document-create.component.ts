import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { Partition } from 'src/app/models/partition';
import { DocumentService } from 'src/app/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {
  private document:Document = {
    id: null,
    title: "Trabalho 1",
    subTitle: "descrição do trabalho",
    titleInEnglish: "Work 1",
    year: 2019,
    schooling: "Ensino superior",
    documentType: "monografia",
    cityName: "Corumbá",
    courseName: "Análise de Sistemas",
    institutionName: "Instituto Federal do Mato Grosso do Sul",
    institutionInitials: "IFMS",
    academicTitle: "bacharel",
    preamble: null,
    catalogCard: null,
    dedication: null,
    epigraph: null,
    abstractX: null,
    abstractInEnglish: null,
    thanks: null,
    partitions: [],
    people: [],
    user: {
      id: 1,
      name: null,
      login: null,
      password: null,
      documents: null
    }
  }


  constructor(private documentService:DocumentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }
  create(){
    this.documentService.createDocument(this.document).subscribe(
      res => {
        alert('Criado com sucesso!')
      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }
}
