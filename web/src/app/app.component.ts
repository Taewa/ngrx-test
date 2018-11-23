import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as fromSotore from "./store/reducers";
import * as fromCharacters from "./store/actions/characters.action";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public chars$: Observable<any[]>;
    public currentChar = 'cat';


    constructor(
        private store: Store<any>,
        private characterStore: Store<fromSotore.CharStates>,
    ) {

    }

    ngOnInit() {
        this.chars$ = this.characterStore.pipe(
            select('products'),
            map(data => data.chars.data)
        );

        this.characterStore.dispatch(new fromCharacters.LoadCharacters());
    }

    changeChar() {
        this.characterStore.dispatch(new fromCharacters.LoadCharactersZombies());
    }
}
