import { Injectable } from "@angular/core";

import { Phrase } from "./phrase";
import {promise} from "selenium-webdriver";

let phrases = [
    new Phrase(1, 'Hello World', 'English'),
    new Phrase(2, 'Здарова Світ', 'Ukrainian'),
    new Phrase(3, 'Hallo Welt', 'German'),
]

let phrasesPromise = Promise.resolve(phrases);

@Injectable()
export class PhraseService(){

    getAll(): Promise<Phrase[]>{
        return phrasesPromise
    }

    getPhrase(id: number): Promise<Phrase>{
        return phrasesPromise
            .then(phrases => phrases.find(x => x.id == id));
    }
}
