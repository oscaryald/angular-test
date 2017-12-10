import { Component, OnInit } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "post-request",
    templateUrl: "post-request.component.html"
})

export class PostRequestComponent implements OnInit{

    constructor(private http: Http){}

    itemArray: any[];
    id: number;
    name: string;

    ngOnInit(){
        this.http.get("app/items").subscribe(
            (result) =>{
                this.itemArray = result.json();
                console.log(result);
            },
            (error) => console.log(error.statusText)
        );
    }

    clickHandler() {
        this.http.post("app/items",{
            id: this.id,
            name: this.name
        }).subscribe(
            (result) =>{
                let json = result.json();
                if(json)
                    console.log(json);
                this.itemArray.push(json);
            },
            (error) => console.log(error.statusText)
        );
    }
}