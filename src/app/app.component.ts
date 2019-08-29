import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController, Events, Nav, App, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  pages: any;
  rootPage:any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, loadingCtrl: LoadingController, events: Events, public app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe('type:ePassbook', () => {
      this.pages = [
        {title: "DASHBOARD", component: "dashboard", iconName: "md-paper"},
        {title: "HELP", component: "help", iconName: "md-help-circle"},
        {title: "SETTINGS", component: "settings", iconName: "md-settings"},
        {title: "LOGOUT", component: LoginPage, iconName: "md-log-out"}
      ]
    });

    events.subscribe('type:mobileBanking', () => {
      this.pages = [
        {title: "DASHBOARD", component: "dashboard", iconName: "md-paper"},
        {title: "CREDIT CARDS", component: "dashboard", iconName: "ios-card"},
        {title: "INVESTMENTS & LOANS", component: "dashboard", iconName: "md-filing"},
        {title: "HELP", component: "help", iconName: "md-help-circle"},
        {title: "SETTINGS", component: "settings", iconName: "md-settings"},
        {title: "LOGOUT", component: LoginPage, iconName: "md-log-out"}
      ]
    });
    
  }
  openPage(pageName){
    this.app.getActiveNav().setRoot(pageName); 
  }
}

