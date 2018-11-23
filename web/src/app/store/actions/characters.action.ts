import {Action} from "@ngrx/store";

export const LOAD_CHARACTERS = '[Character] Load Characters';
export const LOAD_CHARACTERS_ZOMBIES = '[Character] Load Characters zombies';
export const LOAD_CHARACTERS_SUCCESS = '[Character] Load Characters success';
export const LOAD_CHARACTERS_FAILED = '[Character] Load Characters failed';


export class LoadCharacters implements Action {
    readonly type = LOAD_CHARACTERS;
}

export class LoadCharactersZombies implements Action {
    readonly type = LOAD_CHARACTERS_ZOMBIES;
}

export class LoadCharactersSuccess implements Action {
    readonly type = LOAD_CHARACTERS_SUCCESS;

    constructor(public payload: any) {
        console.log('payload!!!!!!!!!', payload);
    }
}

export class LoadCharactersFailed implements Action {
    readonly type = LOAD_CHARACTERS_FAILED;

    constructor(public payload: any) {}
}

export type CharactersAction = LoadCharacters | LoadCharactersSuccess | LoadCharactersFailed;
