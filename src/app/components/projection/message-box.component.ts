import { Component } from "@angular/core";

@Component({
	moduleId: module.id,
	selector: "message-box",
	templateUrl: "message-box.component.html"
})

export class MessageBoxComponent{
	visible: boolean = true;

	hide(){
		this.visible = false;
	}

}

