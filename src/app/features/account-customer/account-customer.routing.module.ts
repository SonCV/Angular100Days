import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessAccountCustomerComponent } from './access-account-customer/access-account-customer.component';
import { DetailAccountCustomerComponent } from './detail-account-customer/detail-account-customer.component';
import { ListAccountCustomerComponent } from './list-account-customer/list-account-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-account-customer',
    pathMatch: 'full'
  },
  {
    path: 'list-account-customer',
    component: ListAccountCustomerComponent
  },
  {
    path: 'detail-account-customer/:id',
    component: DetailAccountCustomerComponent
  },
  {
    path: 'create-account-customer',
    component: AccessAccountCustomerComponent
  },
  {
    path: 'update-account-customer/:id'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountCustomerRoutingModule {

}
