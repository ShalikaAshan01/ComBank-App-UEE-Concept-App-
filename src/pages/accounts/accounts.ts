import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html'
})
export class AccountsPage {

  transactionsRoot = 'ETransactionsPage'
  accountDetailRoot = 'AccountDetailsPage'


  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'menuSlider');
  }

}
