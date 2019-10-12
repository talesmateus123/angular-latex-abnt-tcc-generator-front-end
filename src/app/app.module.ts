import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//app modules
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';
import { DocumentDeleteComponent } from './components/document/document-delete/document-delete.component';
import { DocumentInfoComponent } from './components/document/document-info/document-info.component';
import { DocumentUpdateComponent } from './components/document/document-update/document-update.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
import { PersonInfoComponent } from './components/person/person-info/person-info.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
@NgModule({
  declarations: [
    AppComponent,
    DocumentCreateComponent,
    DocumentDeleteComponent,
    DocumentInfoComponent,
    DocumentUpdateComponent,
    DocumentListComponent,
    PersonCreateComponent,
    PersonDeleteComponent,
    PersonInfoComponent,
    PersonListComponent,
    PersonUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
