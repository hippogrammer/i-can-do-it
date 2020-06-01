import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { FormControl } from '@angular/forms';

// currently supported input types
export enum INPUT_TYPES {
  text = 'text',
  email = 'email',
  password = 'password',
  date = 'date',
  tel = 'tel',
  ext = 'ext',
  time = 'time',
  url = 'url',
  week = 'week'
}

@Component({
  selector: 'bekahs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit, OnChanges, AfterViewChecked {
  @ViewChild('#bekahInput') myInput: ElementRef;
  @Input() type: INPUT_TYPES = INPUT_TYPES.text;
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() set label(label: string) {
    this.inputLabel = label;
  }
  @Input() required: boolean = false;
  @Input() id: string;
  @Input() set control(control: FormControl) {
    if(control) {
      this._control = control;
    }
  };
  get control() {
    return this._control;
  }
  @Input() showTooltip: boolean = false;
  @Input() tooltipText: string = '';
  inputLabel = '';
  value = '';
  _control: FormControl;
  _type: string = INPUT_TYPES.text;
  getErrorMessage() {
    switch (this.control.invalid) {
      case this.control.hasError('email'): {
        return "not a valid email";
        break;
      }
      case this.control.hasError('required'): {
        return 'required';
        break;
      }
      case this.control.hasError('minlength'): {
        return `min ${this.control.errors.minlength.requiredLength} digits`;
      }
      case this.control.hasError('maxlength'): {
        return `max ${this.control.errors.maxlength.requiredLength} digits`;
      }
      default: {
        return 'your entry is invalid';
      }
    } 
}
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
  appendExt(event) {
    this.control = !this.control.invalid ? `${this.control.value} ext. ${event.value}`: this.control.value;
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}
