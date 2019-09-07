import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-list',
  templateUrl: 'account-list.html',
})
export class AccountListPage {

  accounts:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accounts = [
      {"heading":"Account One", "type":"Savings Account","number": "127627813","balance": "1254.00", "date":"28-Aug-2019 09:30"},
      {"heading":"Account Two", "type":"Savings Account","number": "127627813","balance": "1254.00", "date":"28-Aug-2019 09:30"},
      {"heading":"Account Three", "type":"Current Account","number": "127627813","balance": "1254.00", "date":"28-Aug-2019 09:30"},
      {"heading":"Account Four", "type":"Current Account","number": "127627813","balance": "1254.00", "date":"28-Aug-2019 09:30"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountListPage');
  }

}
