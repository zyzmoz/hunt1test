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

  constructor(private formBuilder: FormBuilder) {

    /* Declare Reactive Form Group here */
    this.paymentForm = this.formBuilder.group({
        cHolder: ['', Validators.required],
        cNumber: ['', Validators.required],
        exMonth: ['', [Validators.required, Validators.email]],
        exYear: ['', [Validators.required, Validators.minLength(6)]],
        cvvCvc: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
