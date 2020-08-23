import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ComponentsModule } from '../components/components.module';
import { CotizarPage } from '../pages/cotizar/cotizar.page';
import { CotizarPageModule } from '../pages/cotizar/cotizar.module';

@NgModule({
  entryComponents: [
    CotizarPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    ComponentsModule,
    CotizarPageModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
