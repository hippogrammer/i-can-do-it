import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './phone-mask.directive';
import { RainbowHoverDirective } from './rainbow-hover.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    PhoneMaskDirective,
    RainbowHoverDirective,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PhoneMaskDirective,
    RainbowHoverDirective,
  ]
})
export class DirectivesModule { }
