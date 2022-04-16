import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { SearchResultsComponent } from "./youtube/pages/search-results/search-results.component";
import {PageAuthComponent} from "./auth/pages/page-auth/page-auth.component";

const routes: Routes = [
  { path: '', component: PageAuthComponent },
  { path: 'start', component: HeaderComponent },
  { path: 'main', component: SearchResultsComponent },
];

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
