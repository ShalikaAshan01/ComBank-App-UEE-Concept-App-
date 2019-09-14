import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountProvider {

  db: any;

  constructor(public http: HttpClient) {
    this.db = this.db = firebase.firestore();
  }

  
  getAccounts() {
    return new Promise((resolve, reject) => {
      this.db.collection('accounts')
        .get()
        .then((querySnapshot) => {
          let arr = [];
          querySnapshot.forEach(function (doc) {
            var obj = JSON.parse(JSON.stringify(doc.data()));
            obj.$key = doc.id
            console.log(obj)
            arr.push(obj);
          });

          if (arr.length > 0) {
            resolve(arr);
          } else {
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

}
