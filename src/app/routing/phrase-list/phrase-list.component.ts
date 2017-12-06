import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { Phrase } from "../shared/phrase";
import { PhraseService } from "../shared/phrase.service";

@Component({
	moduleId: module.id,
	selector: "phrase-list",
	templateUrl: "phrase-list.component.html"
})

export class PhraseListComponent implements OnInit{

	phrases: Phrase[];

	constructor(
		private router: Router,
		private phraseService: PhraseService
	){}
	

	ngOnInit(){
		this.phraseService
			.getAll()
			.then(result => this.phrases = result);
	}

	onSelect(selected: Phrase){
		this.router.navigate(["phrase", selected.id]);
	}

}
