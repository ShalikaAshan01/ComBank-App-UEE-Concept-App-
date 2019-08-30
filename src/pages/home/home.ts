import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { FundTransferPage } from '../fund-transfer/fund-transfer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToDashboard() {
    this.navCtrl.push(DashboardPage);
  }

  goToFundTransfer() {
    this.navCtrl.push(FundTransferPage);
  }

}
