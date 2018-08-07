import { Component, OnInit, Input } from '@angular/core';
import { Tools }                    from "app/shared/tools"
import { ActivatedRoute, Router }   from '@angular/router';


@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})

export class OrderSummaryComponent implements OnInit {

  tools : Tools = new Tools();

  orderId    : string;
  mySubscribe: any;
  rated      : boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.tools.logMe("OrderSummaryComponent... constructor");
  }

  ngOnInit() {
    this.tools.logMe("OrderSummaryComponent... iniciando");
    this.mySubscribe = this.route.params.subscribe(params => {this.orderId = params['orderId'];});
    this.tools.logMe(`Order ID : ${this.orderId}`);
  }

  rate(){
    this.rated = true;
  }

}
