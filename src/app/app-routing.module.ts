import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { DocumentDeleteComponent } from './components/document/document-delete/document-delete.component';
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';
import { DocumentInfoComponent } from './components/document/document-info/document-info.component';
import { DocumentUpdateComponent } from './components/document/document-update/document-update.component';

import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
import { PersonInfoComponent } from './components/person/person-info/person-info.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';


const routes: Routes = [
  { path:'document/create', component:DocumentCreateComponent },
  { path:'document/delete/:id', component:DocumentDeleteComponent },
  { path:'document/:id', component:DocumentInfoComponent },
  { path:'documents', component:DocumentListComponent },
  { path:'document/update/:id', component:DocumentUpdateComponent },

  { path:'person/create', component:PersonCreateComponent },
  { path:'person/delete/:id', component:PersonDeleteComponent },
  { path:'person/:id', component:PersonInfoComponent },
  { path:'people', component:PersonListComponent },
  { path:'person/update/:id', component:PersonUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
