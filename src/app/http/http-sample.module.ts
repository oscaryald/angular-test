import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import{
    GetRequestComponent,
    PostRequestComponent,
} from "./index";

@NgModule({
    imports:[
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        GetRequestComponent,
        PostRequestComponent,
    ]
})

export class InMemoryServerModule{

}