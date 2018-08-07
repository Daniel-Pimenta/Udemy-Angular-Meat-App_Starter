import { Component, OnInit }      from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl}  from "@angular/forms"
import { Router }                 from "@angular/router";
import { RadioOption }            from "app/shared/radio/radio-option.model";
import { OrderService }           from "app/order/order.service";
import { CartItem }               from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem }       from "app/order/order-items/order.model";
import { Tools }                  from "app/shared/tools";

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  emailPatern  = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPatern = /^[0-9]*$/

  payOptions :RadioOption[] =[
    {label:'Dinheiro',        value:'CASH'},
    {label:'Cartão Debito',   value:'DEB'},
    {label:'Cartão Credito',  value:'CRED'},
    {label:'Cartão Refeição', value:'REF'}
  ]

  constructor(
    private orderService:OrderService,
    private router      :Router,
    private formBuilder :FormBuilder
  ) { }

  ngOnInit() {

    this.orderForm = this.formBuilder.group(
      {
        name        : this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
        email       : this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPatern)]),
        emailConfirm: this.formBuilder.control('',[Validators.required, Validators.pattern(this.emailPatern)]),
        address     : this.formBuilder.control('',[Validators.required, Validators.minLength(5)]),
        numero      : this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPatern)]),
        complemento : this.formBuilder.control(''),
        payOption   : this.formBuilder.control('',[Validators.required])
      }
      ,{ validator   : OrderComponent.equalsTo}
    );
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email        = group.get('email')
    const emailConfirm = group.get('emailConfirm')
    if (email.value !== emailConfirm.value) {
      return {emailNotMatch:true}
    }
    return undefined
  }

  tools : Tools = new Tools();

  getCartItems(){
    return this.orderService.getItems();
  }

  plusItem(item:CartItem) {
    this.tools.logMe(`OrderComponent.plusItem(${item.menuItem.id})`);
    this.orderService.plusItem(item);
  }

  lessItem(item:CartItem) {
    this.tools.logMe(`OrderComponent.lessItem(${item.menuItem.id})`);
    this.orderService.lessItem(item);
  }

  removeItem(item:CartItem) {
    this.tools.logMe(`OrderComponent.removeItem(${item.menuItem.id})`);
    this.orderService.removeItem(item)
  }

  valorTotal() :number{
    let total :number = 0;
    for (let c of this.getCartItems()) {
      total = total + c.valor();
    }
    return total;
  }

  checkOrder(order :Order){
    this.tools.logMe("OrderComponent.checkOrder()");
    order.orderItem = this.getCartItems().map((item:CartItem)=>new OrderItem(item.qtd, item.menuItem.id));
    this.orderService.checkOrder(order)
      .subscribe((orderId:string) => {
         this.router.navigate(['/order-summary', {"orderId" : orderId}]);
         this.tools.logMe(`Compra concluida: ${orderId}`);
         this.orderService.clear();
    });
  }

}
