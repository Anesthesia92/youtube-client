import { Injectable } from '@angular/core';
import { IUser } from "../models/login.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user$!:Observable<IUser>;
  public name$!:Observable<string>;
  public isLogged!: Observable<boolean>;
  private user$$ = new BehaviorSubject({name: '', password: ''});
  private isLogged$$ = new BehaviorSubject(false);
  private name$$ = new BehaviorSubject('Your name');

  constructor() {
    this.name$ = this.name$$.asObservable();
  }

  public signIn(userData: IUser){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  // public isLogged(){
  //   return localStorage.getItem('ACCESS_TOKEN') !== null; }

  public logOut(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public getName() {

  }
}
