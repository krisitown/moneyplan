import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';

import 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  private _email:string;
  private _password:string;
  private _passwordConfirm:string;
  private _router:Router;

  @Input()
  set email(email:string){
    this._email = email;
  }

  @Input()
  set password(password:string){
    this._password = password;
  }

  @Input()
  set passwordConfirm(passwordConf:string){
    this._passwordConfirm = passwordConf;
  }

  register(){
    console.log(this._email);
    console.log(this._password);
    console.log(this._passwordConfirm);

    if(this._passwordConfirm != this._password){
      console.log("Passwords don't match!");
    } else {
      firebase.auth().createUserWithEmailAndPassword(this._email, this._password).catch((error) => {
        console.log(error.message);
        if(!error){
          this._router.navigate(['/login']);
        }
      })
    }
  }

  constructor(private router : Router) {
    this._router = router;
   }

  ngOnInit() {
  }

}
