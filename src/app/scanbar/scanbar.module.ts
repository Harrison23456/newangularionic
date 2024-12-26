import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanbarPageRoutingModule } from './scanbar-routing.module';

import { ScanbarPage } from './scanbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanbarPageRoutingModule
  ],
  declarations: [ScanbarPage]
})
export class ScanbarPageModule {}
