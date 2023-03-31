import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MyHeaderComponent } from "./my-header.component";

@NgModule ({
    declarations:[
        MyHeaderComponent,
    ],
    exports:[
        MyHeaderComponent,
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class MyHeaderModule { }