import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaDniPageRoutingModule } from './consulta-dni-routing.module';

import { ConsultaDniPage } from './consulta-dni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaDniPageRoutingModule
  ],
  declarations: [ConsultaDniPage]
})
export class ConsultaDniPageModule {}
