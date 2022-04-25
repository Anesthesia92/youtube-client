import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {SearchResultsComponent} from "./pages/search-results/search-results.component";

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YoutubeRoutingModule {}
