import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day7ComponentInteraction1Component } from './day7-component-interaction-1.component';

const routes: Routes = [
  {
    path: '',
    component: Day7ComponentInteraction1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day7ComponentInteraction1RoutingModule {

}
