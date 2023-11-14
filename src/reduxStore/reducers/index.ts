import {combineReducers} from 'redux';
import settingReducer from './settingReducer';
import pokemonCardReducer from './pokemonCardReducer';

export default combineReducers({
  setting: settingReducer,
  pokemonCard: pokemonCardReducer,
});
