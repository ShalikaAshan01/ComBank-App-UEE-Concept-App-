import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ETransactionsPage } from './Etransactions';

@NgModule({
  declarations: [
    ETransactionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ETransactionsPage),
  ],
})
export class TransactionsPageModule {}
