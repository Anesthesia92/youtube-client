import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeModule } from "./youtube/youtube.module";
import { CoreModule } from "./core/core.module";
import { AuthModule}  from "./auth/auth.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [ CommonModule, BrowserModule, AppRoutingModule, YoutubeModule, CoreModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
