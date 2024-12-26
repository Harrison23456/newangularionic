import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaDniPage } from './consulta-dni.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaDniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaDniPageRoutingModule {}
