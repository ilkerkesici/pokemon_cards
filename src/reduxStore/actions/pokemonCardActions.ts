import {Dispatch} from 'redux';
import {SetSavedRecordsAction} from 'reduxStore/dispatchTypes';
import {PokemonCardRecordActionTypes} from 'reduxStore/types';

export function setPokemonCardRecords(records: string[]) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch<SetSavedRecordsAction>({
      type: PokemonCardRecordActionTypes.setSavedRecords,
      payload: records,
    });
  };
}
