import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { SearchResultsComponent } from "./youtube/components/search-results/search-results.component";

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '**', component: SearchResultsComponent},
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
