import { Component } from "@angular/core";
import {NgForm} from '@angular/forms';

@Component({
	moduleId: module.id,
	selector:"namecard",
	templateUrl:"name-card.component.html",
	inputs: ["firstName", "lastName"]
})

export class NameCardComponent{
	firstName: string;

	private _lastName: string;

	get lastName():string{
		return this._lastName;
	}

	set lastName(value:string){
		this._lastName = value;
	}

	get fullName():string{
		console.log(this.lastName) 
		return this.firstName + " " + this.lastName
	}


}