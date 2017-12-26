import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClassifyPage } from '../classify/classify';
import { ConsultPage } from '../consult/consult';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { ShoppingcartPage } from '../shoppingcart/shoppingcart';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ClassifyPage;
  tab3Root = ConsultPage;
  tab4Root=ShoppingcartPage;
  tab5Root=UserPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
