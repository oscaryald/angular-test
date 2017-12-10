import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { ListsModule } from './lists/index';
import { ComponentsSamplesModule } from './components/components-samples.module';
import { TwoWayDataBindingModule } from './two-way-databinding/two-way-databinding.module';
import { ServiceHierarchyModule } from './serviceHierarhy/service-hierarhy.module';

import { ComponentsRoutingModule } from './routing/routing.module';
import { FormsExampleModule } from './forms/forms.module'

import { ItemData } from "./http/inMemoryServer";
import { InMemoryServerModule } from './http/http-sample.module'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { appRouts} from "./routs.list";

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ListsModule,
    ComponentsSamplesModule,
    TwoWayDataBindingModule,
    ServiceHierarchyModule,
    ComponentsRoutingModule,
    InMemoryServerModule,
    FormsExampleModule,
    RouterModule.forRoot(appRouts),
    HttpModule,
    InMemoryServerModule,
    InMemoryWebApiModule.forRoot(ItemData),
  ],
  declarations: [
    AppComponent,
    // HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
