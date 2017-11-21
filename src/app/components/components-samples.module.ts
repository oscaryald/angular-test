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
       ChangeHostComponent,
       BlockComponent,
       BlockHostComponent
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
    ChangeHostComponent,
    BlockComponent,
    BlockHostComponent
  ]
})

export class ComponentsSamplesModule{

}
