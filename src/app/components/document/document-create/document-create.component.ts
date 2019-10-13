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
    titulo:'Título do documento',
    subTitulo:'Sub-título do documento',
    title:'Document title',
    ano:2019,
    nivelEscolar:'superior',
    tipo:'monografia',
    pessoas:null,
    nomeCidade:'Corumbá-MS',
    nomeCurso:'Análise e Desenvolvimento de Sistemas',
    nomeInstituicao:'Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul',
    siglaInstituicao:'IFMS',
    tituloAcademico:'tecnologo',
    preAmbulo:'Texto do pré-ambulo',
    fichaCatalografica:'Texto da ficha catalografica',
    dedicatoria:'Texto da dedicatória',
    epigrafe:'Texto do epígrafe',
    resumo:'Texto do resumo',
    abstractX:'Abstract text',
    agradecimentos:'Texto dos agradecimentos',
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
        alert('Criado com sucesso!')
      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }
}
