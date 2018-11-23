import {
    Action,
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCharacters from './character.reducer';
import {CharacterState} from "./character.reducer";


export interface CharStates {
    chars: fromCharacters.CharacterState;
}

export const reducers: ActionReducerMap<CharStates> = {
    chars: fromCharacters.charactersReducer,
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      console.log('state -----------', state);
      console.log('action ----------', action);
      console.log('/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
   
      return reducer(state, action);
    };
  }


export const metaReducers: MetaReducer<CharStates>[] = !environment.production ? [] : [];
// export const metaReducers: MetaReducer<CharStates>[] = !environment.production ? [debug] : [];


export const getProductsState = createFeatureSelector<CharacterState>('products');

export const getChars = createSelector(getProductsState, (state: CharacterState) => state.data);
export const getCharLoading = createSelector(getProductsState, (state: CharacterState) => state.loading);
export const getCharLoaded = createSelector(getProductsState, (state: CharacterState) => state.loaded);
