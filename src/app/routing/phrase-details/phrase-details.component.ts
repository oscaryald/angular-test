import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute, Params } from "@angular/router";

import { Phrase } from "../shared/phrase";
import { PhraseService } from "../shared/phrase.service";

@Component({
	moduleId: module.id,
	selector:"phrase-details",
	templateUrl: "phrase-details.component.html" 
})

export class PhraseDetailsComponent implements OnInit{
	phrase: Phrase;

	constructor(private router: Router,
		private activateRoute: ActivatedRoute,
		private service: PhraseService){}

	ngOnInit(){
		this.activateRoute.params.forEach((params:Params) => {
			let id = +params["id"];

			this.service
				.getPhrase(id)
				.then(result => this.phrase = result);
		});
	}

	goToPhrasesList(){
		this.router.navigate(["phrases"])
	}
}