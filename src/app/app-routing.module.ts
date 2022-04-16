import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAuthComponent} from "./auth/pages/page-auth/page-auth.component";
import {AuthGuard} from "./auth/guards/auth.guard";
import {NotFoundComponent} from "./auth/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: PageAuthComponent,
    children: [
      // {
      //   path: '', redirectTo: '/login', pathMatch: 'full'
      // },
      {
        path: 'login',
        loadChildren: () =>
          import('../app/auth/components/authorization/authorization.component').then(
            (a) => a.AuthorizationComponent)
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../app/youtube/pages/search-results/search-results.component').then(
            (m) => m.SearchResultsComponent),
            canLoad: [AuthGuard],
      },
      {
        path: '404', component: NotFoundComponent
      },
      {
        path: '**', redirectTo: '404'
      },
    ]
  }
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
