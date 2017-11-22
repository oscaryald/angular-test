import { Component } from "@angular/core";

import { CounterService } from "../counter.service";

@Component({
    moduleId: module.id,
    selector: "counter-3",
    templateUrl: "counter3.component.html",
})

export class Counter3Component{
    private counter: number = 0;

    constructor( private counterService: CounterService ){}

    plusOne(){
        this.counterService.increment();
        this.counter = this.counterService.getValue();
    }

    minusOne(){
        this.counterService.decrement();
        this.counter = this.counterService.getValue();
    }
}