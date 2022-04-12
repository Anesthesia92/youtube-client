import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginComponent } from './core/components/header/login/login.component';
import { SearchInputComponent } from './core/components/header/search-input/search-input.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { FiltersComponent} from "./core/components/filters/filters.component";
import { SearchItemComponent } from './youtube/components/search-results/search-item/search-item.component';
import { SearchInfoComponent } from './youtube/components/search-results/search-info/search-info.component';
import { AngularMaterialModule } from "./material/material.module";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTreeModule } from "@angular/material/tree";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import { StatusDirective } from './shared/directives/status.directive';
import { SortingPipe } from './youtube/pipes/sorting.pipe';

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
    StatusDirective,
    SortingPipe,
  ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule,
        MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatExpansionModule,
        MatTreeModule, MatCardModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
