import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Day2AngularAppComponent } from "./day2-angular-app.component";

const routes: Routes = [
  {
    path: '',
    component: Day2AngularAppComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day2AngularAppRoutingModule {

}
