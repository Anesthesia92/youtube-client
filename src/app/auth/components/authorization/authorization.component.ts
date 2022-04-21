import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class AuthorizationComponent {

  public authForm: FormGroup | any;
  public isSubmitted = false;

  get formControls() { return this.authForm.controls; }

 constructor(private fb: FormBuilder,
             private router: Router,
             private authService: AuthService) {}

 ngOnInit() {
   this.authForm = this.fb.group({
     login: ['', [Validators.required]],
     password: ['', [Validators.required]]
   });
 }

  public signIn(){
    this.isSubmitted = true;
    if(this.authForm.invalid){
      return;
    }
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/main');
  }

}
