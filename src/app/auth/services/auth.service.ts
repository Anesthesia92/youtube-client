import { Injectable } from '@angular/core';
import { IUser } from "../models/login.model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() {}

  public signIn(userData: IUser){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null; }

  public logOut(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
