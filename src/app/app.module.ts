import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginComponent } from './core/components/header/login/login.component';
import { SearchInputComponent } from './core/components/header/search-input/search-input.component';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { FiltersComponent} from "./core/components/filters/filters.component";
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { SearchInfoComponent } from './youtube/components/search-info/search-info.component';
import { AngularMaterialModule } from "./material/material.module";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTreeModule } from "@angular/material/tree";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import { BottomColorDirective } from './shared/directives/bottom-color.directive';
import { SortingPipe } from './youtube/pipes/sorting.pipe';
import { AuthorizationComponent } from './auth/components/authorization/authorization.component';
import { PageAuthComponent } from './auth/pages/page-auth/page-auth.component';

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
    BottomColorDirective,
    SortingPipe,
    AuthorizationComponent,
    PageAuthComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule,
        MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatExpansionModule,
        MatTreeModule, MatCardModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
