import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import {Form1Component, Form2Component} from './index';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    Form1Component,
    Form2Component
  ],
})

export class FormsExampleModule{

}

