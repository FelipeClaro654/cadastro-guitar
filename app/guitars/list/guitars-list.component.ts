import { Component, OnInit } from '@angular/core';
import { Guitar } from './../guitar.model';
import { GuitarService } from './../guitar.service';

@Component({
    moduleId: module.id,
    selector: 'guitars-list',
    templateUrl: 'guitars-list.component.html'
})
export class GuitarsListComponent implements OnInit {

    guitars: Guitar[] = [];

    constructor(
        private guitarService: GuitarService
    ) { }

    ngOnInit(): void {
        this.guitarService.getGuitars()
            .then((guitars: Guitar[]) => {
                this.guitars = guitars;
            })
    }
}