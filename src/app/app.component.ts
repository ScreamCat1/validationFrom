import { Component } from '@angular/core';
import { FormArray, FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  private createForm() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.itarableFormControls()
      .forEach(field => { field.markAsDirty(); });
  }

  isFormInvalid(): boolean {
    return this.itarableFormControls()
      .some(field => field.dirty && !!field.errors);
  }

    itarableFormControls(): Array<AbstractControl> {
      return Object.values(this.loginForm.controls);
    }
  }
