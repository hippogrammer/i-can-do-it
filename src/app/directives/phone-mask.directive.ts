import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[bekahsPhoneMask]',
})
export class PhoneMaskDirective {
  @Input() isExt: boolean = false;
  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onInputChange(event: string) {
    this.isExt ? this.onExtChange(event, false) : this.onPhoneNumChange(event, false);
  }

  @HostListener('keydown.backspace')
  keydownBackspace() {
    // call onchange with the control value and backspace to true
    this.isExt? this.onExtChange(this.ngControl.value, true) : this.onPhoneNumChange(this.ngControl.value, true);
  }

  onPhoneNumChange(event: string, backspace: boolean) {
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      // if backspace was pressed, pop off the last digit they entered
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      // when first set of 3 numbers are entered, format
      newVal = newVal.replace(/^(\d{0,3})/, '($1)');
    } else if (newVal.length <= 6) {
      // when the next set of 3 are entered, format again
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1)-$2');
    } else if (newVal.length <= 10) {
      //the last set of 4 numbers entered, format again
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
    } else {
      newVal = newVal.substring(0, 10);
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1)-$2-$3');
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
  onExtChange(event: string, backspace: boolean) {
    let newVal = event.replace(/\D/g, '');
    if(backspace && newVal.length <= 3){
      newVal = newVal.substring(0, newVal.length - 1);
    }

    if (newVal.length === 0) {
      newVal = '';
    }else if(newVal.length > 3) {
      newVal = newVal.substring(0,3);
    }
    else {
      newVal = newVal.substring(0, 3);
      newVal = newVal.replace(/^(\d{0,3})/, `$1`);
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}