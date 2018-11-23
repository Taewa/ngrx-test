import * as fromCharacters from "../actions/characters.action";
import {Action} from "@ngrx/store";

export interface CharacterState {
    data?: any[];
    loaded?: boolean;
    loading?: boolean;
}

export const initialState: CharacterState = {
    data: [],
    loaded: false,
    loading: false,
};

export function charactersReducer(state = initialState, action: Action): CharacterState {
    switch (action.type) {
        case fromCharacters.LOAD_CHARACTERS : {
            console.log(1, 'LOAD_CHARACTERS');
            return {
                ...state,
                loading: true,
            }
        }

        case fromCharacters.LOAD_CHARACTERS_ZOMBIES : {
            console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzombies');
            return {
                ...state,
                loading: false,
            }
        }

        case fromCharacters.LOAD_CHARACTERS_SUCCESS : {
            console.log(2, 'LOAD_CHARACTERS_SUCCESS', state);
            const data = action['payload'];
            return {
                ...state,
                loaded: true,
                loading: false,
                data
            }
        }

        case fromCharacters.LOAD_CHARACTERS_FAILED : {
            return {
                ...state,
                loaded: false,
                loading: false
            }
        }
    }

    return state;
}

export const getCharLoading = (state: CharacterState) => state.loading;
export const getCharLoaded = (state: CharacterState) => state.loaded;
export const getChar = (state: CharacterState) => state.data;
