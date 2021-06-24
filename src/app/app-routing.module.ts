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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
