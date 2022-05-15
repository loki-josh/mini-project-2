import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainBodyRoutingModule } from './main-body-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { StatusComponent } from './status/status.component';
import { FinishedComponent } from './finished/finished.component';


@NgModule({
  declarations: [
    OrdersComponent,
    StatusComponent,
    FinishedComponent
  ],
  imports: [
    CommonModule,
    MainBodyRoutingModule
  ]
})
export class MainBodyModule { }
