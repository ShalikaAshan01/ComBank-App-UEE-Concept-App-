import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  MenuController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-accountDetails',
  templateUrl: 'accountDetails.html',
})
export class AccountDetailsPage {

  offers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    //this.menuCtrl.enable(false, 'menuSlider');
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
