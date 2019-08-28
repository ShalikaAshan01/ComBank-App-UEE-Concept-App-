import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

  offers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offers = [
      {"heading":"Pizza Hut Offer", "content":"Buy one large pizza at Pizza Hut and get regular pizza free", "date":"28-Aug-2019 09:30"},
      {"heading":"Pizza Hut Offer", "content":"Buy one large pizza at Pizza Hut and get regular pizza free", "date":"28-Aug-2019 09:30"},
      {"heading":"Pizza Hut Offer", "content":"Buy one large pizza at Pizza Hut and get regular pizza free", "date":"28-Aug-2019 09:30"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }

}
