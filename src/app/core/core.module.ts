import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from "./core-routing.module";
import { FiltersComponent } from "./components/filters/filters.component";
import { HeaderComponent } from "./components/header/header.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { LoginComponent } from "./components/login/login.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from "@angular/forms";
import {AuthModule} from "../auth/auth.module";

@NgModule({
  declarations: [FiltersComponent, HeaderComponent, SearchInputComponent, LoginComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, CoreRoutingModule, MatButtonModule, MatInputModule, MatToolbarModule, FormsModule, AuthModule]
})

export class CoreModule { }
