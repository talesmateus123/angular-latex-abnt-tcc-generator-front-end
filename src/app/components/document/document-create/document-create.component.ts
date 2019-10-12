import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { Person } from 'src/app/models/person';
import { Partition } from 'src/app/models/partition';
import { Citation } from 'src/app/models/citation';
import { Word } from 'src/app/models/word';
import { DocumentService } from 'src/app/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {
  private document:Document = {
    id:null,
    titulo:'Título',
    subTitulo:'SubTítulo',
    title:'Title',
    ano:2019,
    nivelEscolar:'superior',
    tipo:'monografia',
    pessoas:null,
    nomeCidade:'Corumbá',
    nomeCurso:'Curso',
    nomeInstituicao:'Instituição',
    siglaInstituicao:'I',
    tituloAcademico:'superior',
    preAmbulo:'pré-ambulo',
    fichaCatalografica:'ficha catalografica',
    dedicatoria:'dedicatória',
    epigrafe:'epígrafe',
    resumo:'resumo',
    abstractX:'abstract',
    agradecimentos:'agradecimentos',
    particoes:null,
    citacoes:null,
    palavras:null
  }

  constructor(private documentService:DocumentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }
  create(){
    this.documentService.createDocument(this.document).subscribe(
      res => {

      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }
}
