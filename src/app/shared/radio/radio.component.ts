import { Component, OnInit, Input, forwardRef }   from '@angular/core';
import { RadioOption }                            from "app/shared/radio/radio-option.model";
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import { Tools }                                  from "app/shared/tools"

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting:forwardRef(() => RadioComponent)
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() options: RadioOption[];
  value : any;
  tools : Tools = new Tools();

  ngOnInit() {
  }

  setValue(value:any){
    this.value = value
    this.onChange(value)
  }

  onChange :any

  writeValue(obj: any) {
    this.value = obj;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
  }
  setDisabledState(isDisabled: boolean) {
  }

}
