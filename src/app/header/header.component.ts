import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
      this.isLoggedIn = this._auth.isLogged;
      console.log(this.isLoggedIn);      
  }  
}
