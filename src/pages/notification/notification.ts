import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

/**
 * Generated class for the NotificationPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  transactionsRoot = 'TransactionsPage'
  offersRoot = 'OffersPage'


  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'menuSlider');
  }

}
