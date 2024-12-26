import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanbarPage } from './scanbar.page';

const routes: Routes = [
  {
    path: '',
    component: ScanbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanbarPageRoutingModule {}
