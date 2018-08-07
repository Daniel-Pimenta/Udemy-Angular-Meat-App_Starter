import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { OrderComponent }       from "app/order/order.component";
import { OrderItemsComponent }  from "app/order/order-items/order-items.component";
import { SharedModule }         from "app/shared/shared.module";

const ROUTES: Routes = [
  {path: '',  component: OrderComponent}
]

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent],
  imports     : [SharedModule, RouterModule.forChild(ROUTES)],
  exports     : [],
  providers   : [],
  bootstrap   : []
})

export class OrderModule { }
