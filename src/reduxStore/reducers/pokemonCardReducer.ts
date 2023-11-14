import {AllPokemonCardActions} from 'reduxStore/dispatchTypes';
import {PokemonCardRecordActionTypes} from 'reduxStore/types';
import {PokemonCardState} from './stateTypes';

const INITIAL_STATE: PokemonCardState = {
  records: [],
};

export default (state = INITIAL_STATE, action: AllPokemonCardActions) => {
  switch (action.type) {
    case PokemonCardRecordActionTypes.setSavedRecords:
      return {
        ...state,
        records: action.payload,
      };

    default:
      return state;
  }
};
