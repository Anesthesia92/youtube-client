import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  public name!: Observable<string>;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }
}
