import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1InstallationComponent } from './day1-installation.component';

const routes: Routes = [

  {
    path: '',
    component: Day1InstallationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Day1InstallationRoutingModule {

}
