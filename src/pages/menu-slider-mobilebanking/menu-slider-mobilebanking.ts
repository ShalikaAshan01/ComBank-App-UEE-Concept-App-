import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, App } from 'ionic-angular';

/**
 * Generated class for the MenuSliderMobilebankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-slider-mobilebanking',
  templateUrl: 'menu-slider-mobilebanking.html',
})
export class MenuSliderMobilebankingPage {
  rootPage = 'NotificationsPage';

  @ViewChild(Nav) nav: Nav;

  pages: any;

  constructor(public navCtrl: NavController, public appCtrl: App) {
  }

  ionViewDidLoad() {
    this.pages = [
      { title: 'Notifications', pageName: 'NotificationsPage', icon: 'md-notifications' },
      { title: 'Settings', pageName: 'SettingsPage', icon: 'md-settings' },
    ];
  }

  openPage(page: any) {
    let params = {};
    this.nav.push(page.pageName, params);
  }

  isActive(page: any) {
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  logout() {
    this.appCtrl.getRootNav().setRoot('LoginPage');
  }

}
