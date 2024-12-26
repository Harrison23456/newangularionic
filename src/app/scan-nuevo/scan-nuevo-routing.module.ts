import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanNuevoPage } from './scan-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: ScanNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanNuevoPageRoutingModule {}
