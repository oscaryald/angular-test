import { Component, QueryList, ContentChildren, AfterContentInit } from "@angular/core";
import { ViewContentComponent } from "./view-content.component";

@Component({
	moduleId: module.id,
	selector: "list",
	templateUrl: "view-contents.component.html"
})

export class ViewContentsComponent implements AfterContentInit{
	count: number = 0;

	@ContentChildren(ViewContentComponent)
	items: QueryList<ViewContentComponent>;

	ngAfterContentInit(){
		this.count = this.items.length;
		this.items.forEach(x => x.changeData())
	}
}