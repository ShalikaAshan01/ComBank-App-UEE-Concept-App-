import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardPage } from '../mobileBanking/dashboard/dashboard';

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

}
