import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {AuthorizationComponent} from "./components/authorization/authorization.component";

const routes: Routes = [
  {
    path: '', component: AuthorizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {}
