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
       ViewContentComponent,
       ViewContentsComponent,
       ViewContentHostComponent
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
    ViewContentComponent,
    ViewContentsComponent,
    ViewContentHostComponent
  ]
})

export class ComponentsSamplesModule{

}
