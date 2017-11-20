import { Component, SimpleChange } from "@angular/core";

@Component({
	moduleId: module.id,
	selector: "sample",
	templateUrl: "changes.component.html",
	inputs: ["name", "value"]
})

export class ChangeComponent{
	name: string;
	value: number;

	ngOnChanges(changes:{[propertyName: string]:SimpleChange}){
		let msgArray: string[] = []

		for(let propName in changes){
			msgArray.push(`property = ${propName}, 
				current value = ${changes[propName].currentValue},
				previous value = ${changes[propName].previousValue}`)
		}

		console.log(msgArray.join("; "));
	}

}
