import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishedComponent } from './finished/finished.component';
import { OrdersComponent } from './orders/orders.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path:'orders', component:OrdersComponent},
  {path:'status', component:StatusComponent},
  {path:'finished', component:FinishedComponent}
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainBodyRoutingModule { }
