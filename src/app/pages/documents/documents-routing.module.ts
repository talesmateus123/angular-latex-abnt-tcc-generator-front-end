import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents.component';
import { NewDocumentComponent } from './new/new-document.component';
import { InfoDocumentComponent } from './info/info-document.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsComponent
  },
  {
    path: 'new',
    component: NewDocumentComponent
  },
  {
    path: 'info/:id',
    component: InfoDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsComponentRoutingModule {}
