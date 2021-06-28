import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Day9TwoWayBindingComponent } from './day9-two-way-binding.component';
import { Day9TwoWayBindingRoutingModule } from './day9-two-way-binding.routing.module';

@NgModule({
  declarations: [
    Day9TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    Day9TwoWayBindingRoutingModule
  ],
  exports: []
})

export class Day9TwoWayBindingModule {

}
