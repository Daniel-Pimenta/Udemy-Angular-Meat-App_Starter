import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  rates    : number[] = [1,2,3,4,5];
  rate     : number   = 0;
  prevRate : number;

  constructor() { }

  clickRate(r:number){
    this.rate = r;
    this.prevRate = undefined;
    this.rated.emit(r);
  }

  setPrevRate(r:number){
    if (this.prevRate === undefined){
      this.prevRate = this.rate;
    }
    this.prevRate = r;
  }

  clearPrevRate(r:number){
    if (this.prevRate !== undefined){
      this.rate = this.prevRate;
      this.prevRate = undefined
    }
  }

  ngOnInit() {
  }

}
