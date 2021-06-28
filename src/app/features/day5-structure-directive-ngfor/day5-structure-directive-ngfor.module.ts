import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Day5StructureDirectiveNgForComponent } from "./day5-structure-directive-ngfor.component";
import { Day5StructureDirectiveNgForRoutingModule } from "./day5-structure-directive-ngfor.routing.module";

@NgModule({
  declarations: [
    Day5StructureDirectiveNgForComponent
  ],
  imports: [
    CommonModule,
    Day5StructureDirectiveNgForRoutingModule
  ],
  exports: []
})

export class Day5StructureDirectiveNgForModule {

}
