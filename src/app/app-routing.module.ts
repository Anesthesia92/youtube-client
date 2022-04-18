import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAuthComponent } from "./auth/pages/page-auth/page-auth.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { YoutubeRoutingModule } from "./youtube/youtube-routing.module";

const routes: Routes = [

  //   path: '', component: PageAuthComponent,
  //   children: [
  //     {
  //       path: '', redirectTo: '/main', pathMatch: 'full'
  //     },
  //     {
  //       path: 'login', component: AuthorizationComponent
  //     },
  //     {
  //       path: 'main', component: YoutubeRoutingModule,
  //       canLoad: [AuthGuard]
  //     },
  //   ]
  // },
  // {
  //   path: '404', component:
  // },
  // {
  //   path: '**', redirectTo: '404'
  // },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:
    [RouterModule]
})

export class AppRoutingModule {}
