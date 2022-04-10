import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FiltersComponent} from "./filters/filters.component";
import { SearchItemComponent } from './search-results/search-item/search-item.component';
import { SearchInfoComponent } from './search-results/search-info/search-info.component';
import { AngularMaterialModule } from "./material/material.module";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTreeModule } from "@angular/material/tree";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SearchInputComponent,
    SearchResultsComponent,
    FiltersComponent,
    SearchItemComponent,
    SearchInfoComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule,
        MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatExpansionModule,
        MatTreeModule, MatCardModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
