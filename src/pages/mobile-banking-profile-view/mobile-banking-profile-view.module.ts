import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MobileBankingProfileViewPage} from './mobile-banking-profile-view';

@NgModule({
  declarations: [
    MobileBankingProfileViewPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileBankingProfileViewPage),
  ],
})
export class MobileBankingProfileViewPageModule {
}
