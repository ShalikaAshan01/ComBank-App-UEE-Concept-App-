import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExchangeRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-rates',
  templateUrl: 'exchange-rates.html',
})
export class ExchangeRatesPage {

  exchangeRates: any = [
    {"currency": "US DOLLAR", "buy": 177.20, "sell": 183.30},
    {"currency": "AUSTRALIAN DOLLAR", "buy": 119.76, "sell": 125.90},
    {"currency": "EMIRATI DIRHAM", "buy": 43.78, "sell": 50.37},
    {"currency": "BAHRAINI DINAR", "buy": 426.44, "sell": 490.62},
    {"currency": "CANADIAN DOLLAR", "buy": 132.49, "sell": 139.67},
    {"currency": "SWISS FRANC", "buy": 177.62, "sell": 187.24},
    {"currency": "DANISH KRONE", "buy": 25.93, "sell": 27.34},
    {"currency": "EURO", "buy": 194.55, "sell": 203.38},
    {"currency": "BRITISH POUND", "buy": 218.91, "sell": 226.48},
    {"currency": "HONG KONG DOLLAR", "buy": 22.36, "sell": 23.58},
    {"currency": "JORDANIAN DINAR", "buy": 226.80, "sell": 260.93},
    {"currency": "JAPANESE YEN", "buy": 1.65, "sell": 1.73},
    {"currency": "KUWAITI DINAR", "buy": 529.47, "sell": 609.15},
    {"currency": "MALAYSIAN RINGGIT", "buy": 40.84, "sell": 44.24},
    {"currency": "NORWEGIAN KRONE", "buy": 19.40, "sell": 20.53},
    {"currency":"NEW ZEALAND DOLLAR", "buy": 111.90, "sell": 117.97},
    {"currency": "OMANI RIAL", "buy": 417.66, "sell": 480.51},
    {"currency": "QATARI RIYAL", "buy": 44.16, "sell": 50.80},
    {"currency": "SAUDI ARABIAN RIYAL", "buy": 42.86, "sell": 49.32},
    {"currency": "SWEDISH KRONA", "buy": 18.09, "sell": 19.07},
    {"currency": "SINGAPORE DOLLAR", "buy": 126.50, "sell": 133.51},
    {"currency": "THAI BHAT", "buy": 5.57, "sell": 6.03},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.exchangeRates = [
      {"currency": "US DOLLAR", "buy": 177.20, "sell": 183.30},
      {"currency": "AUSTRALIAN DOLLAR", "buy": 119.76, "sell": 125.90},
      {"currency": "EMIRATI DIRHAM", "buy": 43.78, "sell": 50.37},
      {"currency": "BAHRAINI DINAR", "buy": 426.44, "sell": 490.62},
      {"currency": "CANADIAN DOLLAR", "buy": 132.49, "sell": 139.67},
      {"currency": "SWISS FRANC", "buy": 177.62, "sell": 187.24},
      {"currency": "DANISH KRONE", "buy": 25.93, "sell": 27.34},
      {"currency": "EURO", "buy": 194.55, "sell": 203.38},
      {"currency": "BRITISH POUND", "buy": 218.91, "sell": 226.48},
      {"currency": "HONG KONG DOLLAR", "buy": 22.36, "sell": 23.58},
      {"currency": "JORDANIAN DINAR", "buy": 226.80, "sell": 260.93},
      {"currency": "JAPANESE YEN", "buy": 1.65, "sell": 1.73},
      {"currency": "KUWAITI DINAR", "buy": 529.47, "sell": 609.15},
      {"currency": "MALAYSIAN RINGGIT", "buy": 40.84, "sell": 44.24},
      {"currency": "NORWEGIAN KRONE", "buy": 19.40, "sell": 20.53},
      {"currency":"NEW ZEALAND DOLLAR", "buy": 111.90, "sell": 117.97},
      {"currency": "OMANI RIAL", "buy": 417.66, "sell": 480.51},
      {"currency": "QATARI RIYAL", "buy": 44.16, "sell": 50.80},
      {"currency": "SAUDI ARABIAN RIYAL", "buy": 42.86, "sell": 49.32},
      {"currency": "SWEDISH KRONA", "buy": 18.09, "sell": 19.07},
      {"currency": "SINGAPORE DOLLAR", "buy": 126.50, "sell": 133.51},
      {"currency": "THAI BHAT", "buy": 5.57, "sell": 6.03},
    ]
  }

  openNotificationPage(){
    this.navCtrl.push('NotificationsPage');
  }
}
