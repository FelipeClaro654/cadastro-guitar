import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component"
import { GuitarsModule } from "./guitars/guitars.module"

@NgModule({
    imports: [
        BrowserModule,
        GuitarsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    exports: [],
    providers: []
})
export class AppModule { }
