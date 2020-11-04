import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';

import { DocumentComponent } from './components/document/document.component';

const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'document/create', component: DocumentCreateComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'document/:id', component: DocumentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
