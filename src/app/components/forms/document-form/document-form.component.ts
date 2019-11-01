import { Component, Input, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { Partition } from 'src/app/models/partition';
import { DocumentService } from 'src/app/services/document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {
  @Input() private document:Document
  @Input() private createForm:boolean
  @Input() private updateForm:boolean

  private tiposDeTrabalho:SelectItem[]
  private escolaridades:SelectItem[]
  private tituloAcademico:SelectItem[]
  
  private id:string
  
  constructor(private documentService:DocumentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.createForm) {
      this.document = {
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
    }

    this.tiposDeTrabalho = [
      { label:'Monografia', value:'monografia' },
      { label:'Artigo', value:'artigo' }
    ]

    this.escolaridades = [
      { label:'Médio', value:'medio' },
      { label:'Graducação', value:'graducacao' },
      { label:'Pós-graduação', value:'pos-graduacao' },
      { label:'Mestrado', value:'mestrado' },
      { label:'Doutorado', value:'doutorado' }
    ]

    this.tituloAcademico = [
      { label:'Técnico', value:'tecnico' },
      { label:'Tecnólogo', value:'tecnologo' },
      { label:'Bacharel', value:'bacharel' },
      { label:'Mestre', value:'mestre' },
      { label:'Doutor', value:'doutor' }
    ]

  }

  create(){
    this.documentService.createDocument(this.document).subscribe(
      res => {
        alert('Criado com sucesso!')
      }
    )
  }
  update(){
    this.documentService.updateDocument(this.id, this.document).subscribe(
      res => {
        alert('Atualizado com sucesso!')
      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }
  
}
