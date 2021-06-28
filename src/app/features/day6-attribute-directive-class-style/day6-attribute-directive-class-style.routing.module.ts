import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Day6AttributeDirectiveClassStyleComponent } from "./day6-attribute-directive-class-style.component";

const routes: Routes = [
  {
    path: '',
    component: Day6AttributeDirectiveClassStyleComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day6AttributeDirectiveClassStyleRoutingModule {

}
