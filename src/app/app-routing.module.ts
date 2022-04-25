import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./auth/components/not-found/not-found.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { SearchResultsComponent } from "./youtube/pages/search-results/search-results.component";

const routes: Routes = [
  {
    path: '', component: SearchResultsComponent,
   children: [
     { path: '', redirectTo: 'login', pathMatch: 'full' },
     {
       path: 'login', loadChildren: () =>
         import('../app/auth/auth.module').then((a) => a.AuthModule)
     },
     {
       path: 'main', loadChildren: () =>
         import('../app/youtube/youtube.module').then((e) => e.YoutubeModule),
       canLoad: [AuthGuard]
     },
     {
       path: '404', component: NotFoundComponent
     },
     {
       path: '**', redirectTo: '404'
     },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:
    [RouterModule]
})

export class AppRoutingModule {}
