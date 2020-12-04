import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path: string;
  private username:string;
  public isLoggedIn: boolean;
  constructor(private http: HttpClient, private router: Router) {

  }

  /*private _loginUrl = "http://localhost:3000/api/login";
  constructor(private http:HttpClient) { }*/

  /*loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }*/

  loginUser(username: string, password: string) {
    this.path = username + '/' + password;
    this.path = this.path.replace(' ', '');
    this.http.get('https://agricoleapi.azurewebsites.net/api/User/' + this.path).subscribe((data: boolean) => {
      this.username = username;
      this.isLoggedIn = true;
      this.router.navigate(['/user-profile']);
    });
  }

  getUsers() {
    return this.http.get('https://agricoleapi.azurewebsites.net/api/User/')
  }

  getUser() {
    return this.http.get<User>('https://agricoleapi.azurewebsites.net/api/User/' + this.username);
  }
}
