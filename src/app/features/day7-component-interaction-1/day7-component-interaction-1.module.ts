import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Day7ComponentInteraction1Component } from "./day7-component-interaction-1.component";
import { Day7ComponentInteraction1RoutingModule } from "./day7-component-interaction-1.routing.module";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";

@NgModule({
  declarations: [
    Day7ComponentInteraction1Component,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    Day7ComponentInteraction1RoutingModule
  ],
  exports: []
})

export class Day7ComponentInteraction1Module {

}
