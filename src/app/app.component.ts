import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent {
  paymentForm: FormGroup;
  displayMessage: string;
  submitted = false;

  card: any = {
    cHolder: '',
    cNumber: '',
    exMonth: '',
    exYear: '',
    cvvCvc: ''
  }

  constructor(private formBuilder: FormBuilder) {

    /* Declare Reactive Form Group here */


  }
  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      cHolder: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      cNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern(/^[0-9]*$/)]],
      exMonth: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/^[0-9]*$/)]],
      exYear: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/^[0-9]*$/)]],
      cvvCvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]*$/)]]
    });
  }

  get f() { return this.paymentForm.controls; }

  submitForm() {
    this.submitted = true;
    if (this.paymentForm.invalid) {
      console.log(this.paymentForm);
      return;
    }
    /* Change the display message on button click / submit form */
  }

  paymentInvalid() {
    if (!this.submitted)
      return;
    if(!this.paymentForm.invalid)
      return "Payment Successful!";
    if(this.paymentForm.invalid)
      return "Payment Failed!";
  }
}
