import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }
  formChanged() {
    console.log(this.randoForm.controls.input);
  }

  onFormSubmit() {
    console.log(this.randoForm);
  }
}
