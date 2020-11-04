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
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
//components
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PartitionComponent } from './components/partition/partition.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { DocumentGenerateOutputComponent } from './components/document/document-generate-output/document-generate-output.component';
import { DocumentFormComponent } from './components/forms/document-form/document-form.component';
import { PersonFormComponent } from './components/forms/person-form/person-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentCreateComponent,
    DocumentListComponent,
    FooterComponent,
    HeaderComponent,
    DocumentComponent,
    PartitionComponent,
    PrincipalComponent,
    DocumentGenerateOutputComponent,
    DocumentFormComponent,
    PersonFormComponent,
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
    TableModule,
    PanelMenuModule,
    EditorModule,
    InputTextareaModule,
    SelectButtonModule,
    InputTextModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
