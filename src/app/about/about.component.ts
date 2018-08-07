import { Tools }             from "app/shared/tools"
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate}       from '@angular/animations'

@Component({
  selector: 'mt-about',
  templateUrl: './about.component.html',
  animations : [
    trigger('aboutAparece',[
      state('ready' , style({opacity:1})),
      transition('void => ready', [
        style({opacity:0, transform: 'translateY(-100px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  tools : Tools = new Tools();
  aboutState : string = 'ready';

  constructor() { }

  ngOnInit() {
  }

}
