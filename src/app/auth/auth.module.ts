import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthorizationComponent } from "./components/authorization/authorization.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { PageAuthComponent } from "./pages/page-auth/page-auth.component";
import { AuthGuard } from "./guards/auth.guard";
import { ReactiveFormsModule } from "@angular/forms";
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    RegistrationComponent,
    AuthorizationComponent,
    PageAuthComponent,
    LogoutComponent
  ],
  imports: [CommonModule, AuthRoutingModule, MatInputModule, MatButtonModule, MatCardModule, ReactiveFormsModule],
  providers: [AuthGuard],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [AuthorizationComponent, LogoutComponent],
  bootstrap: [PageAuthComponent]
})

export class AuthModule {}
