import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ListsModule } from './lists/index';
import { ComponentsSamplesModule } from './components/components-samples.module';
import { TwoWayDataBindingModule } from './two-way-databinding/two-way-databinding.module';
import { ServiceHierarchyModule } from './serviceHierarhy/service-hierarhy.module';

import { ComponentsRoutingModule } from './routing/routing.module';
// import { AppRouterModule } from './routingForChild/routing-for-child.module'


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
    // AppRouterModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
  ],
  declarations: [
    AppComponent,
    // HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
