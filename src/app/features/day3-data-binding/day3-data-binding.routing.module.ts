import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Day3DataBindingComponent } from "./day3-data-binding.component";

const routes: Routes = [
  {
    path: '',
    component: Day3DataBindingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day3DataBindingRoutingModule {

}
