import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the RateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RateProvider {

  constructor(public http: HttpClient) {
  }

  getInterestRates() {
    return new Promise(resolve => {
      this.http.get('/assets/json/interest_rates.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
