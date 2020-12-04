import { Component, OnInit } from '@angular/core';
import { CriteriasService } from '../services/criterias.service';
import {Criteria} from '../criteria';
import {AuthService} from '../services/auth.service';
import {User} from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  criterias:Criteria[];
  users:User[];
  currentUser:User;
  loggedUser:User;
  constructor(private _crit:CriteriasService, private _auth:AuthService) { }

  ngOnInit(): void {   
    this._crit.getCriterias().subscribe((data: Criteria[]) => {
      this.criterias = data; 
    });  

    this._auth.getUser().subscribe((data:User) => {
      this.currentUser = data;
      this.loggedUser = this.currentUser;
      console.log(data);
    });

    this._auth.getUsers().subscribe((data:User[]) => {
      this.users = data;  
    });
  }

  lookUser(user:User){
    this.currentUser = user;
  }

}
