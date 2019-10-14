import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//app modules
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { TableModule } from 'primeng/table';
//components
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';
import { DocumentDeleteComponent } from './components/document/document-delete/document-delete.component';
import { DocumentUpdateComponent } from './components/document/document-update/document-update.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
import { PersonInfoComponent } from './components/person/person-info/person-info.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { PartitionCreateComponent } from './components/partition/partition-create/partition-create.component';
import { PartitionListComponent } from './components/partition/partition-list/partition-list.component';
import { PartitionUpdateComponent } from './components/partition/partition-update/partition-update.component';
import { PartitionDeleteComponent } from './components/partition/partition-delete/partition-delete.component';
import { DataxCreateComponent } from './components/datax/datax-create/datax-create.component';
import { DataxListComponent } from './components/datax/datax-list/datax-list.component';
import { DataxUpdateComponent } from './components/datax/datax-update/datax-update.component';
import { DataxDeleteComponent } from './components/datax/datax-delete/datax-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentCreateComponent,
    DocumentDeleteComponent,
    DocumentUpdateComponent,
    DocumentListComponent,
    PersonCreateComponent,
    PersonDeleteComponent,
    PersonInfoComponent,
    PersonListComponent,
    PersonUpdateComponent,
    NavbarTopComponent,
    NavbarLeftComponent,
    PartitionCreateComponent,
    PartitionListComponent,
    PartitionUpdateComponent,
    PartitionDeleteComponent,
    DataxCreateComponent,
    DataxListComponent,
    DataxUpdateComponent,
    DataxDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    TabMenuModule,
    ButtonModule,
    EditorModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
