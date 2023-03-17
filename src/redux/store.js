import {
  combineReducers,
} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import cryto from './coins/coinsSlice';
import detail from './details/detailsSlice';

const reducer = combineReducers({
  cryto,
  detail,
});

const store = configureStore({
  reducer,
});

export default store;
