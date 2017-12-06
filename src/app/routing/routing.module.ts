import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
       PhraseService,
       HomeComponent,
       PhraseListComponent,
       PhraseDetailsComponent,
	   } from './index';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    PhraseListComponent,
    PhraseDetailsComponent,
  ],
  providers: [
    PhraseService
  ]
})

export class ComponentsRoutingModule{

}
