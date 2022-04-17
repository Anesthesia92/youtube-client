import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAuthComponent} from "./auth/pages/page-auth/page-auth.component";
import {AuthGuard} from "./auth/guards/auth.guard";
import {NotFoundComponent} from "./auth/components/not-found/not-found.component";
import {AuthorizationComponent} from "./auth/components/authorization/authorization.component";
import {SearchResultsComponent} from "./youtube/pages/search-results/search-results.component";

const routes: Routes = [
  {
    path: '', component: PageAuthComponent,
    children: [
      {
        path: '', redirectTo: '/login', pathMatch: 'full'
      },
      {
        path: 'login', component: AuthorizationComponent
      },
    ]
  },
  {
    path: 'main', component: SearchResultsComponent,
    canLoad: [AuthGuard]
  },
  {
    path: '404', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '404'
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:
    [
      RouterModule
    ]
})

export class AppRoutingModule {}
