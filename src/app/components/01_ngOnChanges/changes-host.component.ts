import { Component } from "@angular/core";

@Component({
	moduleId: module.id,
	templateUrl: "changes-host.component.html"
})

export class ChangeHostComponent{
	nameValue: string;
	counter: number = 0;

	changeName(){
		this.nameValue = "value " + new Date().getTime();
	}

	changeValue(){
		this.counter++;
	}

	changeBoth(){
		this.changeName();
		this.changeValue();
	}
}