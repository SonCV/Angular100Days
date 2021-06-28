import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'day1-installation',
        pathMatch: 'full'
      },
      {
        path: 'day1-installation',
        loadChildren: () => import('../app/features/day1-installation/day1-installation.module').then(m => m.Day1InstallationModule)
      },
      {
        path: 'day2-angular-app',
        loadChildren: () => import('../app/features/day2-angular-app/day2-angular-app.module').then(m => m.Day2AngularAppModule)
      },
      {
        path: 'day3-data-binding',
        loadChildren: () => import('../app/features/day3-data-binding/day3-data-binding.module').then(m => m.Day3DataBindingModule)
      },
      {
        path: 'day4-structure-directive-if-else',
        loadChildren: () => import('../app/features/day4-structure-directive-if-else/day4-structure-directive-if-else.module').then(m => m.Day4StructureDirectiveIfElseModule)
      },
      {
        path: 'day5-structure-directive-ngfor',
        loadChildren: () => import('../app/features/day5-structure-directive-ngfor/day5-structure-directive-ngfor.module').then(m => m.Day5StructureDirectiveNgForModule)
      },
      {
        path: 'day6-attribute-directive-class-style',
        loadChildren: () => import('../app/features/day6-attribute-directive-class-style/day6-attribute-directive-class-style.module').then(m => m.Day6AttributeDirectiveClassStyleModule)
      },
      {
        path: 'day7-component-interaction-1',
        loadChildren: () => import('../app/features/day7-component-interaction-1/day7-component-interaction-1.module').then(m => m.Day7ComponentInteraction1Module)
      },
      {
        path: 'day8-component-interaction-2',
        loadChildren: () => import('../app/features/day8-component-interaction-2/day8-component-interaction-2.module').then(m => m.Day8ComponentInteraction2Module)
      },
      {
        path: 'day9-two-way-binding',
        loadChildren: () => import('../app/features/day9-two-way-binding/day9-two-way-binding.module').then(m => m.Day9TwoWayBindingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
