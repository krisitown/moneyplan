import { Component } from '@angular/core';
import * as firebase from 'firebase';

import 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'money-plan';
  loggedIn:boolean;

  constructor(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    })
  }

  logout(){
    firebase.auth().signOut();
  }
}
