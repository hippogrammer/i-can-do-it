import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './phone-mask.directive';



@NgModule({
  declarations: [
    PhoneMaskDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PhoneMaskDirective,
  ]
})
export class DirectivesModule { }
