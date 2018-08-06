import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent {
  paymentForm: FormGroup;
  displayMessage: string;
  
  card: any = {
      cHolder: '',
      cNumber: '',
      exMonth: '',
      exYear: '',
      cvvCvc: ''
  }

  constructor() {

    /* Declare Reactive Form Group here */
    this.paymentForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
