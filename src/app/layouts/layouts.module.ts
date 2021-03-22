import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        MatSidenavModule,
        MatDividerModule,
        MatCardModule,
        FlexLayoutModule
    ],
    exports: [

    ]
})

export class LayoutsModule {
    
}