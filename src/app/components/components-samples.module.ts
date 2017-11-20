import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
		   CounterComponent,
		   CounterHostComponent,
       TimerComponent,
       TimerHostComponent,
       NameCardComponent,
       NameCardHostComponent,
       MessageBoxComponent,
       MessageBoxHostComponent,
       ChangeComponent,
       ChangeHostComponent
	   } from './index';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterComponent,
    CounterHostComponent,
    TimerComponent,
    TimerHostComponent,
    NameCardComponent,
    NameCardHostComponent,
    MessageBoxComponent,
    MessageBoxHostComponent,
    ChangeComponent,
    ChangeHostComponent
  ]
})

export class ComponentsSamplesModule{

}
