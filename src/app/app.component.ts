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
    

  }
  ngOnInit() {
     this.paymentForm = this.formBuilder.group({
        cHolder: ['', Validators.required, Validators.pattern(/^[a-zA-Z]+/)],
        cNumber: ['', Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern(/^[0-9]+/)],
        exMonth: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
        exYear: ['', [Validators.required, Validators.minLength(6)]],
        cvvCvc: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
