import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  total: any;
  account1: any;
  account2: any;

  currentLogin: Date;
  lastVisit: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');

    this.account1 = 4343242.34;
    this.account2 = 4342442.45;

    this.currentLogin = new Date();
    this.lastVisit = new Date();

    this.total = this.account1 + this.account2;

  }

}
