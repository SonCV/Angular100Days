import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Day5StructureDirectiveNgForComponent } from "./day5-structure-directive-ngfor.component";

const routes: Routes = [
  {
    path: '',
    component: Day5StructureDirectiveNgForComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day5StructureDirectiveNgForRoutingModule {

}
