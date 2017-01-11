import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { GuitarsListComponent } from "./list/guitars-list.component";
import { GuitarService } from "./guitar.service"

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [GuitarsListComponent],
    declarations: [GuitarsListComponent],
    providers: [GuitarService],
})
export class GuitarsModule { }
