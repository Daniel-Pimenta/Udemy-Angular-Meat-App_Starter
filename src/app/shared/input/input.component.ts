import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName }                                 from '@angular/forms'
import { Tools }                                                    from "app/shared/tools";

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})

export class InputComponent implements OnInit, AfterContentInit {

  input     : any;

  @Input() label    :string;
  @Input() errorMsg :string;
  @Input() showTip  :boolean = true;

  @ContentChild(NgModel)         model  : NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  tools : Tools = new Tools();

  constructor() { }

  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName')
    }
  }

  isValid():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  noValid():boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched);
  }

  ngOnInit() {
  }

}
