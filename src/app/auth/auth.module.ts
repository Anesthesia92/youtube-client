import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {PageAuthComponent} from "./pages/page-auth/page-auth.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    NotFoundComponent,
    RegistrationComponent,
    PageAuthComponent,
    AuthorizationComponent
  ],
  imports: [
    CommonModule, AuthRoutingModule, MatInputModule, MatButtonModule, MatCardModule
  ]
})

export class AuthModule {}
