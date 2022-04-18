import { Component, Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { SortingService } from "../../../youtube/services/sorting.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class AuthorizationComponent {

 constructor(private fb: FormBuilder,
             private router: Router,
             private authService: AuthService,
             private sort: SortingService) {
 //   this.authForm = fb.group({
 //     login: ['user', [Validators.required]],
 //   password: ['pass', [Validators.required]],
 //   });
 // }
 //    ngOnInit() {
 //   this.sort.setSearchDisable();
    }


}
