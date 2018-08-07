import { Component, OnInit } from '@angular/core';
import { Tools }             from "app/shared/tools"
@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  tools : Tools = new Tools();

  constructor() { }

  ngOnInit() {
  }

}
