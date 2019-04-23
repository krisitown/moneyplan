import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';

import 'firebase/auth';
import { Router } from '@angular/router';

const firebaseConfig = {
  apiKey: "AIzaSyDEs6XZ10SeoydV5yPUhOp9IRtNYD5Y-1A",
    authDomain: "moneyplan-7389e.firebaseapp.com",
    databaseURL: "https://moneyplan-7389e.firebaseio.com",
    projectId: "moneyplan-7389e",
    storageBucket: "moneyplan-7389e.appspot.com",
    messagingSenderId: "284876919539"
}

firebase.initializeApp(firebaseConfig);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _email;
  private _password;

  @Input()
  set email(email : String){
    this._email = email || email.trim();
  }

  @Input()
  set password(password : String){
    this._password = password;
  }

  login(){
    console.log(this._email);
    console.log(this._password);
    firebase.auth().signInWithEmailAndPassword(this._email, this._password).catch((error) => {
      console.log(error.message);
    });
  }

  constructor(private router : Router) { 
  }

  ngOnInit() {
      firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.router.navigate(['/']);
      }
    })
  }

}
