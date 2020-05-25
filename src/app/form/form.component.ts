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
  });
  welcomeText: string = 'Welcome to the forms page! I am using reactive forms in this page. The FormBuilder is being used to group form controls being displayed on the page. Hover each control to see its functionality.';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }
  formChanged() {
    console.log(this.randoForm.controls.input);
  }
}
