import { RouterModule, Routes } from "@angular/router";
import { SearchResultsComponent } from "./pages/search-results/search-results.component";
import { NgModule } from "@angular/core";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YoutubeRoutingModule {}
