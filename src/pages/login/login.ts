import {Component} from '@angular/core';
import {Events, IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  ePassbook: boolean;
  segment: string = "passbook";
  public data: any = {
    id: '',
    password: '',
    isChecked: false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menuSlider');
  }

  ionViewDidLoad() {
    this.ePassbook = true;
  }

  segmentChanged(ev: any) {
    this.ePassbook = this.segment === 'passbook';
  }

  login() {
    console.log(this.data);
    if (this.ePassbook) {
      this.navCtrl.push('MenuSliderPassbookPage');
    } else {
      this.navCtrl.push('MenuSliderMobilebankingPage');
    }
  }
}
