import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthorizationComponent } from "./components/authorization/authorization.component";
import {PageAuthComponent} from "./pages/page-auth/page-auth.component";

const routes: Routes = [
  {
    path: '',
    component: PageAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {}
