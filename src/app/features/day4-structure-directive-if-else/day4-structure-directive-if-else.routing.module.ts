import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Day4StructureDirectiveIfElseComponent } from "./day4-structure-directive-if-else.component";

const routes: Routes= [
  {
    path: '',
    component: Day4StructureDirectiveIfElseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day4StructureIfElseDirectiveRoutingModule {

}
