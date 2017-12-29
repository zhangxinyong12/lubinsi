import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TabsPage } from './tabs';
import { ClassifyPageModule } from '../classify/classify.module';
import { ConsultPageModule } from '../consult/consult.module';
import { HomePageModule } from '../home/home.module';
import { UserPageModule } from '../user/user.module';
import { ShoppingcartPageModule } from '../shoppingcart/shoppingcart.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    ClassifyPageModule, //商品分类
    ConsultPageModule, //咨询
    HomePageModule,    //首页
    UserPageModule,    //用户
    ShoppingcartPageModule,//购物车
    IonicModule.forRoot(TabsPage),
  ],
  exports:[
    TabsPage
  ],
  entryComponents:[
    TabsPage
  ]
})
export class TabsPageModule {}
