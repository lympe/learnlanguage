import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import GameReducer from './GameReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
  nav: NavReducer,
  settings: SettingsReducer,
  game: GameReducer
});
