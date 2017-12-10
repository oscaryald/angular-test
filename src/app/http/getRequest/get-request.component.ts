import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "get-request",
    templateUrl: "get-request.component.html"
})

export class GetRequestComponent {

    itemArray: any[];

    constructor(private http: Http){}

    clickHandler() {

        this.http.get("app/items").subscribe(

            (result) =>{
                this.itemArray = result.json();
                console.log(result);
            },
            (error) => console.log(error.statusText)
        );
    }
}