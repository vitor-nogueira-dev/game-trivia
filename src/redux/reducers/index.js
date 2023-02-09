import { combineReducers } from 'redux';
import player from './player';
import api from './api';

const rootReducer = combineReducers({ player, api });

export default rootReducer;
