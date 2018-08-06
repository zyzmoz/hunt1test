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
      cvvCvc: '',
  }

  constructor() {

    /* Declare Reactive Form Group here */

  }

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
