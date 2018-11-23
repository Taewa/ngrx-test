import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from "@ngrx/store";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {CharactersService} from "../../services/characters/characters.service";
import * as CharacterActions from '../actions/characters.action';
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private charactersService: CharactersService
    ) {
    }

    @Effect()
    loadCharactersCats$ = this.actions$.pipe(
        ofType(CharacterActions.LOAD_CHARACTERS),
        switchMap(() => {
            return this.charactersService.getCats().pipe(
                map(chars => new CharacterActions.LoadCharactersSuccess(chars)),
                catchError(error => of(new CharacterActions.LoadCharactersFailed(error)))
            )
        })
    )

    @Effect()
    loadCharactersZombies$ = this.actions$.pipe(
        ofType(CharacterActions.LOAD_CHARACTERS_ZOMBIES),
        switchMap(() => {
            return this.charactersService.getZombies().pipe(
                map(chars => new CharacterActions.LoadCharactersSuccess(chars)),
                catchError(error => of(new CharacterActions.LoadCharactersFailed(error)))
            )
        })
    )
}
