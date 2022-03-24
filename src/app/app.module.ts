import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { HeaderComponent } from './header/header.component';
import { LiginComponent } from './header/ligin/ligin.component';
import { LoginComponent } from './header/login/login.component';
import { SearchInputComponent } from './header/search-input/search-input.component';
import { SettingsComponent } from './header/settings/settings.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchItemComponent } from './search-results/search-item/search-item.component';
import { SearchInfoComponent } from './search-results/search-item/search-info/search-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HeaderComponent,
    LiginComponent,
    LoginComponent,
    SearchInputComponent,
    SettingsComponent,
    SearchResultsComponent,
    FiltersComponent,
    SearchItemComponent,
    SearchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
