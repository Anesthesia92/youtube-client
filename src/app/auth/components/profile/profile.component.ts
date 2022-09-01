import {Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{

  public isLogged!: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // let subscribe = this.auth.isLogged.subscribe((value: boolean) => {
    //   this.isLogged = value;
    // });
  }

}
