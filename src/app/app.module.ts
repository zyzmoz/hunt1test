import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';

@NgModule({
  /* set respective calls to components, services, etc here */
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})

export class AppModule { }
