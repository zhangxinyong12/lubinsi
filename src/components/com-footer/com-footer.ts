import { Component ,ViewChild,Input} from '@angular/core';
import { IonicPage, NavController, NavParams , Content } from 'ionic-angular';

/**
 * Generated class for the ComFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'com-footer',
  templateUrl: 'com-footer.html'
})
export class ComFooterComponent {
  // @ViewChild(Content) content:Content;
  @Input() content:Content; //从父组件接收content 对象

  constructor() {
    console.log('Hello ComFooterComponent Component');
  }
  scrollToTop(){  // 回到顶部 https://ionicframework.com/docs/api/components/content/Content/
    this.content.scrollToTop().then(()=>{console.log('滚动完成')}); // 可选参数 默认300ms 返回 promise
    // scrollTo(x,y,time)  滚动的位置x y ，时间 默认300ms
    //返回 promise 
  }
  //长按事件
  con(){
    console.log('长按')
  }
}
