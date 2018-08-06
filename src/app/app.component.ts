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

 
  constructor(private formBuilder: FormBuilder) {

    /* Declare Reactive Form Group here */
    this.paymentForm = this.formBuilder.group({
      nameOnCard: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern(/^[0-9]*$/)]],
      expirationMonth: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/^[0-9]*$/)]],
      expirationYear: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(/^[0-9]*$/)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]*$/)]]
    });

  }
 
  get f() { return this.paymentForm.controls; }

  submitForm() {
    this.submitted = true;   
       
    if(this.paymentForm.invalid){
      this.displayMessage = "Payment Failed!";
      return;
    }
    
    
    this.displayMessage = "Payment Successful!";
  }

  
}
