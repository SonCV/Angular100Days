import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Day4StructureDirectiveIfElseComponent } from "./day4-structure-directive-if-else.component";
import { Day4StructureIfElseDirectiveRoutingModule } from "./day4-structure-directive-if-else.routing.module";

@NgModule( {
  declarations: [
    Day4StructureDirectiveIfElseComponent
  ],
  imports: [
    CommonModule,
    Day4StructureIfElseDirectiveRoutingModule
  ],
  exports: []
})

export class Day4StructureDirectiveIfElseModule {

}
