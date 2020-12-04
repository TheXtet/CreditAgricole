import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import {User} from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {

  //isLoggedIn: Observable<boolean>;
  isLoggedIn:boolean;
  currentUser:User;

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
      this.isLoggedIn = this._auth.isLoggedIn;
      this._auth.getUser().subscribe((data:User) => {
        this.currentUser = data;
      });  
  }  
}
