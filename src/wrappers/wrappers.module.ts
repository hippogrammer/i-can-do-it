import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DirectivesModule } from 'src/app/directives/directives.module';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
  exports: [
    InputComponent,
  ]
})
export class WrappersModule { }
