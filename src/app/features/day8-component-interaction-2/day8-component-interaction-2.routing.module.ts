import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Day8ComponentInteraction2Component } from "./day8-component-interaction-2.component";

const routes: Routes = [
  {
    path: '',
    component: Day8ComponentInteraction2Component
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day8ComponentInteraction2RoutingModule {

}
