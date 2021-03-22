import { NgModule } from '@angular/core';
import { DetailAccountCustomerComponent } from './detail-account-customer/detail-account-customer.component';
import { ListAccountCustomerComponent } from './list-account-customer/list-account-customer.component';
import { AccessAccountCustomerComponent } from './access-account-customer/access-account-customer.component';
import { AccountCustomerRoutingModule } from './account-customer.routing.module';

@NgModule({
    declarations: [
    DetailAccountCustomerComponent,
    ListAccountCustomerComponent,
    AccessAccountCustomerComponent
    ],
    imports: [
      AccountCustomerRoutingModule
    ],
    exports: [

    ]
})

export class AccountCustomerModule {

}