import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = new BehaviorSubject<boolean>(false); 

  /*private _loginUrl = "http://localhost:3000/api/login";
  constructor(private http:HttpClient) { }*/

  /*loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }*/

  loginUser(){
    this.isLoggedIn.next(true);
  }

  get isLogged(){
    return this.isLoggedIn.asObservable();
  }

}
