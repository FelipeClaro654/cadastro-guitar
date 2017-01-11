import { Injectable } from "@angular/core";
import { GUITARS } from "./guitars-mock";
import { Guitar } from "./guitar.model";

@Injectable()

export class GuitarService {
    getGuitars(): Promise<Guitar[]>{
        return Promise.resolve(GUITARS);
    }
}