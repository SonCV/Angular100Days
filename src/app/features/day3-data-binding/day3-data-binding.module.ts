import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Day3DataBindingComponent } from "./day3-data-binding.component";
import { Day3DataBindingRoutingModule } from "./day3-data-binding.routing.module";

@NgModule({
  declarations: [
    Day3DataBindingComponent
  ],
  imports: [
    FormsModule,
    Day3DataBindingRoutingModule
  ],
  exports: []
})

export class Day3DataBindingModule {

}
