import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginUserData={
    password:'',
    email:''
  };

  constructor(private _auth:AuthService, private _router:Router) { 
    
  }

  ngOnInit(): void {
    
  }

  loginUser(){
    console.log(this.loginUserData); 
    this._auth.loginUser();
    this._router.navigate(['/userProfile']);
    /*this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)  
      )*/
  }

}
