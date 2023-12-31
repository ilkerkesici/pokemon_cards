import {ThemeType, LanguageType} from 'types/setting';

export interface SettingState {
  theme: ThemeType;
  language: LanguageType;
}

export interface PokemonCardState {
  records: string[];
}
