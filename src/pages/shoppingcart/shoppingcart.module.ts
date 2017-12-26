import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingcartPage } from './shoppingcart';

@NgModule({
  declarations: [
    ShoppingcartPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingcartPage),
  ],
})
export class ShoppingcartPageModule {}
