// Setting Actions

import {PokemonCardRecordActionTypes, SettingActionTypes} from './types';
import {ThemeType, LanguageType} from 'types/setting';

export interface SetThemeAction {
  type: SettingActionTypes.setTheme;
  payload: ThemeType;
}

export interface SetLanguageAction {
  type: SettingActionTypes.setLanguage;
  payload: LanguageType;
}

// Pokemon Card Actions
export interface SetSavedRecordsAction {
  type: PokemonCardRecordActionTypes.setSavedRecords;
  payload: string[];
}

export type AllSettingActions = SetThemeAction | SetLanguageAction;

export type AllPokemonCardActions = SetSavedRecordsAction;
