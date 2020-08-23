import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LisVehiculosPage } from './lis-vehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: LisVehiculosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LisVehiculosPage]
})
export class LisVehiculosPageModule {}
