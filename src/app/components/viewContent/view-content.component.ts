import { Component } from "@angular/core";

@Component({
	moduleId: module.id,
	selector: "item",
	templateUrl: "view-content.component.html"
})

export class ViewContentComponent{
	data: number;

	changeData(){
		this.data = new Date().getTime();
	}
}