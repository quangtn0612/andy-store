import passport from './passport';
import wallet from './wallet';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  passport,
  wallet
})

export default reducer;