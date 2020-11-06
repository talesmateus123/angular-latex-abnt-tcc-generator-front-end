import { Component, OnInit } from '@angular/core';
import { DocumentService as Service } from '../shared/services/document.service';
import { Router } from '@angular/router';

import { Document } from './../shared';

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css']
})
export class NewDocumentComponent implements OnInit {
  public document: Document = {
    titulo: 'Titulo',
    subTitulo: 'sub título',
    title: 'Title',
    nomeAutor: 'Tales',
    sobrenomeAutor: 'Ferreira',
    nomeCidade: 'Corumbá',
    ano: null,
    dataAprovacao: null,
    tipoTrabalho: 'TCC',
    tituloAcademico: 'TECNOLOGO',
    nomeInstituicao: 'Instituto Federal do Mato Grosso do Sul',
    siglaInstituicao: 'IFMS',
    campusInstituicao: 'Corumbá',
    nomeCurso: 'Análise e Desenvolvimento de Sistemas',
    nivelEscolarCurso: 'SUPERIOR',
    nomeOrientador: 'Orientador',
    sobrenomeOrientador: null,
    nomeCoorientador: 'Coorientador',
    sobrenomeCoorientador: null,
    textoAbstractX: 'Texto do abstract',
    palavrasChaveAbstractX: ['Palavra-chave 1', 'Palavra-chave 2', 'Palavra-chave 3'],
    agradecimentos: 'Texto do agradecimentos',
    dedicatoria: 'Texto da dedicatória',
    epigrafe: 'Texto do epigrafe',
    fichaCatalograficaPalavrasChave: ['Palavra-chave 1', 'Palavra-chave 2', 'Palavra-chave 3'],
    preAmbulo: 'Texto do preambulo',
    textoResumo: 'Texto do resumo',
    palavrasChaveResumo: ['Palavra-chave 1', 'Palavra-chave 2', 'Palavra-chave 3'],
    // Lista em HTML com índices
    listaSiglas: '',
    // Lista em HTML com índices
    listaSimbolos: '',
    capitulos: [],
    apendices: [],
    anexos: []
  };

  constructor(
    private router: Router,
    private service: Service
  ) { }

  ngOnInit() {

  }

  create() {
    this.service.save(this.document);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
