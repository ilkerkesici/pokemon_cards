import {createSelector} from '@reduxjs/toolkit';
import {VirtualRootState} from 'reduxStore/store';

export const getSavedPokemonCardRecords = createSelector(
  (state: VirtualRootState) => state,
  (state: VirtualRootState) => state.pokemonCard.records,
);
