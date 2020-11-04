import { Component, Input, OnInit } from '@angular/core';
import { DocumentService as Service } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {
  @Input() private document: Document;
  @Input() private createForm: boolean;
  @Input() private updateForm: boolean;

  private tiposDeTrabalho: SelectItem[];
  private escolaridades: SelectItem[];
  private tituloAcademico: SelectItem[];

  private id: string;

  constructor(private documentService: Service, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.createForm) {
      this.document = null;
    }

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

  create() {
    this.documentService.createDocument(this.document);
  }

  update() {
    this.documentService.updateDocument(this.id, this.document);
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
