import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ListsModule } from './lists/index';
import { ComponentsSamplesModule } from './components/components-samples.module';
import { ServiceHierarchyModule } from './serviceHierarhy/service-hierarhy.module';

import { appRouts} from "./routs.list";

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ListsModule,
    ComponentsSamplesModule,
      ServiceHierarchyModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
