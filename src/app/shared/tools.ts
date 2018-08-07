import { Component } from '@angular/core';

export class Tools {

  constructor(){}

  IS_LOG : boolean = true;

  logMe(msg:string) {
    if (this.IS_LOG) {
      console.log(msg);
    }
  }

}
