import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultPage } from './consult';

@NgModule({
  declarations: [
    ConsultPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultPage),
  ],
})
export class ConsultPageModule {}
