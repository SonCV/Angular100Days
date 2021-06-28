import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day9TwoWayBindingComponent } from './day9-two-way-binding.component';

const routes: Routes = [
  {
    path: '',
    component: Day9TwoWayBindingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day9TwoWayBindingRoutingModule {

}
