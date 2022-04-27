import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeModule } from "./youtube/youtube.module";
import { CoreModule } from "./core/core.module";
import { AuthModule}  from "./auth/auth.module";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "./core/guards/auth.guard";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, YoutubeModule, CoreModule, AuthModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
