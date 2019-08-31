import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the FundTransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fund-transfer',
  templateUrl: 'fund-transfer.html',
})
export class FundTransferPage {

  formGroup: FormGroup;

  options: string;
  userAccounts: any;
  thirdPartyAccounts: any;

  type: AbstractControl;
  payFrom: AbstractControl;
  payTo: AbstractControl;
  amount: AbstractControl;
  date = new Date();
  month: number;
  currentDate: string;

  notComplete: boolean = true;

  transfer: {};
  transferDetails: {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.options = 'transfer';
    this.month = this.date.getMonth() + 1;
    this.currentDate = this.date.getFullYear() + '/' + this.month + '/' + this.date.getMonth();

    this.formGroup = formBuilder.group({
      type: ['', Validators.required],
      payFrom: ['', Validators.required],
      payTo: ['', Validators.required],
      amount: ['', Validators.required]
    });

    // this.type = this.formGroup.controls['type'];
    // this.payFrom = this.formGroup.controls['payFrom'];
    // this.payTo = this.formGroup.controls['payTo'];
    // this.amount = this.formGroup.controls['amount'];

    this.userAccounts = [
      { 'currency': 'LKR', 'accountBalance': 107458.14, 'accountNumber': '8480065437', 'cardNumber': '5247 8745 6598 3541', 'cardName': 'Godamune G.A.P.J.', 'expiry': '05/24', 'accountType': 'Savings Account', 'cardType': 'VISA' },
      { 'currency': 'LKR', 'accountBalance': 107458.25, 'accountNumber': '8480067543', 'cardNumber': '5247 8745 6598 3541', 'cardName': 'Godamune G.A.P.J.', 'expiry': '05/24', 'accountType': 'Savings Account', 'cardType': 'MASTER' },
      { 'currency': 'LKR', 'accountBalance': 107458.25, 'accountNumber': '8480009875', 'cardNumber': '5247 8745 6598 3541', 'cardName': 'Godamune G.A.P.J.', 'expiry': '05/24', 'accountType': 'Savings Account', 'cardType': 'VISA' }
    ];

    this.thirdPartyAccounts = [
      { 'currency': 'LKR', 'accountBalance': 107458.14, 'accountNumber': '8480065656', 'cardNumber': '5247 8745 6598 3541', 'cardName': 'Godamune G.A.P.J.', 'expiry': '05/24', 'accountType': 'Savings Account', 'cardType': 'VISA' },
      { 'currency': 'LKR', 'accountBalance': 107458.25, 'accountNumber': '8480027893', 'cardNumber': '5247 8745 6598 3541', 'cardName': 'Godamune G.A.P.J.', 'expiry': '05/24', 'accountType': 'Savings Account', 'cardType': 'MASTER' },
      { 'currency': 'LKR', 'accountBalance': 107458.25, 'accountNumber': '8480086100', 'cardNumber': '5247 8745 6598 3541', 'cardName': 'Godamune G.A.P.J.', 'expiry': '05/24', 'accountType': 'Savings Account', 'cardType': 'VISA' }
    ];

    this.transferDetails = [
      { 'type': 'Own Account', 'paidFrom': '8480065437', 'paidTo': '8480065656', 'amount': '1000.00', 'date': this.currentDate, 'status': 'successful' },
      { 'type': 'Own Account', 'paidFrom': '8480067543', 'paidTo': '8480027893', 'amount': '1000.00', 'date': this.currentDate, 'status': 'successful' },
      { 'type': 'Third Party', 'paidFrom': '8480009875', 'paidTo': '8480086100', 'amount': '1000.00', 'date': this.currentDate, 'status': 'successful' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundTransferPage');
  }

  makeTransfer() {
    this.transfer = {
      'type': this.type,
      'payFrom': this.payFrom,
      'payTo': this.payTo,
      'amount': this.amount,
      'date': this.currentDate
    }
    this.formGroup.reset();
    this.notComplete = false;
    console.log(this.transfer);

    setInterval(() => {
      this.notComplete = true;
    }, 5000);
  }

  okay() {
    this.notComplete = true;
  }

}
