import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { formSubmittedAction } from './ngrx/form.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  randoForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
    phone: ['', [Validators.required]],
    ext: ['', [Validators.minLength(3), Validators.maxLength(4)]],
    company: ['', [Validators.maxLength(40)]],
    jobTitle: ['', [Validators.required, Validators.maxLength(40)]],
  });
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private sb: MatSnackBar) { }

  ngOnInit(): void {}

  onFormSubmit() {
    this.store.dispatch(formSubmittedAction({profile: this.randoForm.getRawValue()}))
    this.sb.open(`Thanks, ${this.randoForm.controls.name.value}!`, 'shut up', { duration: 2000 });
    this.randoForm.reset();
  }
}
