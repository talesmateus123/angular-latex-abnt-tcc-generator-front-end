import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { DocumentDeleteComponent } from './components/document/document-delete/document-delete.component';
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';

import { DocumentComponent } from './components/document/document.component';
import { PrincipalComponent } from './pages/principal/principal.component';


const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path:'document/create', component:DocumentCreateComponent },
  { path:'document/delete/:id', component:DocumentDeleteComponent },
  { path:'documents', component:DocumentListComponent },
  { path:'document/:id', component:DocumentComponent },

//  { path:'person/create', component:PersonCreateComponent },
//  { path:'person/delete/:id', component:PersonDeleteComponent },
//  { path:'person/:id', component:PersonInfoComponent },
//  { path:'people', component:PersonListComponent },
  //{ path:'person/update/:id', component:PersonUpdateComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
