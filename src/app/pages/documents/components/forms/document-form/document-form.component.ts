import { Component, Input, OnInit } from '@angular/core';
import { DocumentService as Service } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

import { Document } from './../../../shared/models/document';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})

export class DocumentFormComponent implements OnInit {
  @Input() public document: Document;

  public tiposDeTrabalho: SelectItem[];
  public escolaridades: SelectItem[];
  public tituloAcademico: SelectItem[];

  constructor() { }

  ngOnInit() {
    this.tiposDeTrabalho = [
      { label: 'Monografia', value: 'monografia' },
      { label: 'Artigo', value: 'artigo' }
    ];

    this.escolaridades = [
      { label: 'Médio', value: 'medio' },
      { label: 'Graducação', value: 'graducacao' },
      { label: 'Pós-graduação', value: 'pos-graduacao' },
      { label: 'Mestrado', value: 'mestrado' },
      { label: 'Doutorado', value: 'doutorado' }
    ];

    this.tituloAcademico = [
      { label: 'Técnico', value: 'tecnico' },
      { label: 'Tecnólogo', value: 'tecnologo' },
      { label: 'Bacharel', value: 'bacharel' },
      { label: 'Mestre', value: 'mestre' },
      { label: 'Doutor', value: 'doutor' }
    ];

  }

}
