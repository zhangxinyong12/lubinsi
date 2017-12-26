import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public icon1=['每月特价','热销爆款','套餐团购','新品上市','鲁宾斯','体验馆','我秀我家','帮助中心'];
  public iconList=[
    {img:'iconList1.png',title:'每月特价'},
    {img:'iconList2.png',title:'热销爆款',hot:true},
    {img:'iconList3.png',title:'套餐团购',hot:true},
    {img:'iconList4.png',title:'新品上市'},
    {img:'iconList5.png',title:'鲁宾斯'},
    {img:'iconList6.png',title:'体验馆'},
    {img:'iconList7.png',title:'我秀我家'},
    {img:'iconList8.png',title:'帮助中心'}
  ];
  public proHotList=[
    {img:'proHotList1.png',title:'中式桃木  实木长地柜',prise:'￥ 5400'},
    {img:'proHotList2.png',title:'双人多功能 按摩浴缸',prise:'￥ 5400'},    
    {img:'proHotList1.png',title:'中式桃木 &nbsp;&nbsp;实木长地柜',prise:'￥ 5400'},
    {img:'proHotList2.png',title:'双人多功能 按摩浴缸',prise:'￥ 5400'},
    {img:'proHotList5.png',title:'全铜可360度旋转厨房 单把单孔冷热水龙头',prise:'￥ 5400'},
    {img:'proHotList6.png',title:'橡木爵士白雕刻卫浴柜 双人欧式落地浴室柜',prise:'￥ 5400'},
    {img:'proHotList7.png',title:'双人多功能按摩浴缸 亚克力双裙边浴缸',prise:'￥ 5400'},
    
    
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
