import { Injectable } from '@angular/core';

import { Document } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  documents: Document[];

  defaultDocumentList: Document[] = [
    {
      id: String(Date.now()),
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
      capitulos: [
        {
          titulo: 'Capitulo 1',
          body: '<p>Parágrafo 1</p><h1>Seção 1</h1><p>Parágrafo 1 <a href=\"https://www.google.com/\">Link</a></p><p>Parágrafo 2 <b>texto em negrito</b></p><h2>Subseção 1</h2><p>Lista ordenada:</p><ol><li>Item 1</li> <li>Item 2</li></ol>'
        },
        {
          titulo: 'Capitulo 2',
          body: '<p>Parágrafo 1</p><h1>Seção 1</h1><p>Parágrafo 1 <a href=\"https://www.google.com/\">Link</a></p><p>Parágrafo 2 <b>texto em negrito</b></p><h2>Subseção 1</h2><p>Lista ordenada:</p><ol><li>Item 1</li> <li>Item 2</li></ol>'
        }
      ],
      apendices: [
        {
          titulo: 'Apendice 1'
        },
        {
          titulo: 'Apendice 2'
        },
      ],
      anexos: [
        {
          titulo: 'Apendice 1'
        },
        {
          titulo: 'Apendice 2'
        },
      ]
    }
  ];

  constructor() {
    this.populateLocalStorageIfDoesntExists();
    this.populateDocumentList();
  }

  getAll(): Document[] {
    this.populateDocumentListIfDoenstExists();
    return JSON.parse(localStorage.getItem('documents'));
  }

  get(id: string): Document {
    this.populateDocumentListIfDoenstExists();

    for (const document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }

  save(document: Document) {
    this.populateDocumentListIfDoenstExists();
    document.id = String(Date.now());
    this.documents.push(document);
    localStorage.setItem('documents', JSON.stringify(this.documents));
    this.populateDocumentList();
  }

  update(id: string, document: Document) {
    this.populateDocumentListIfDoenstExists();
    if (this.documentListContains(this.get(id))) {
      for (let i = 0; i <  this.documents.length; i++) {
        if (this.documents[i].id === id) {
          this.documents[i] = document;
        }
      }
      localStorage.setItem('documents', JSON.stringify(this.documents));
      this.populateDocumentList();
      return;
    }
    // Generates a exception.
  }

  remove(id: string) {
    this.populateDocumentListIfDoenstExists();
    if (this.documentListContains(this.get(id))) {
      for (let i = 0; i <  this.documents.length; i++) {
        if (this.documents[i].id === id) {
          this.documents.splice(i, 1);
        }
      }
      localStorage.setItem('documents', JSON.stringify(this.documents));
      this.populateDocumentList();
      return;
    }
    // Generates a exception.
  }

  private populateLocalStorageIfDoesntExists() {
    if (!localStorage.getItem('documents')) {
      localStorage.setItem('documents', JSON.stringify(this.defaultDocumentList));
    }
  }

  private populateDocumentListIfDoenstExists() {
    if (this.documents) {
      this.populateDocumentList();
    }
  }

  private populateDocumentList() {
    this.documents = JSON.parse(localStorage.getItem('documents'));
  }

  private documentListContains(obj: Document) {
    let i = this.documents.length;
    while (i--) {
      if (this.documents[i] !== undefined) {
        if (this.documents[i].id === obj.id) {
          return true;
        }
      }
    }
    return false;
  }

}
