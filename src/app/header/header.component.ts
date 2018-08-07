import { Component, OnInit } from '@angular/core';
import { Tools }             from "app/shared/tools"
@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  tools : Tools = new Tools();

  constructor() { }

  ngOnInit() {
  }

}
