import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanNuevoPageRoutingModule } from './scan-nuevo-routing.module';

import { ScanNuevoPage } from './scan-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanNuevoPageRoutingModule
  ],
  declarations: [ScanNuevoPage]
})
export class ScanNuevoPageModule {}
