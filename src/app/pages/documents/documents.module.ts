import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

import { RouterModule } from '@angular/router';
import { DocumentsComponentRoutingModule } from './documents-routing.module';

import { DocumentsComponent } from './documents.component';
import { NewDocumentComponent } from './new';
import { InfoDocumentComponent } from './info';
import { DocumentService, StorageService } from './shared';

import { DocumentFormComponent } from './components/forms/document-form/document-form.component';
import { PartitionComponent } from './components/partition/partition.component';
import { DocumentGenerateOutputComponent } from './components/generate-output/document-generate-output.component';

@NgModule({
  declarations: [
    DocumentsComponent,
    NewDocumentComponent,
    InfoDocumentComponent,
    DocumentFormComponent,
    PartitionComponent,
    DocumentGenerateOutputComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    TabMenuModule,
    ButtonModule,
    FormsModule,
    TableModule,
    PanelMenuModule,
    EditorModule,
    InputTextareaModule,
    SelectButtonModule,
    InputTextModule,
    TabViewModule,
    DocumentsComponentRoutingModule,
    RouterModule,
  ],
  providers: [
    DocumentService,
    StorageService
  ]
})
export class DocumentsModule { }
