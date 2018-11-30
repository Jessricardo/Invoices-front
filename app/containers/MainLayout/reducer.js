/*
 *
 * MainLayout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  RESET,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  CHANGE_DATA,
  CHANGE_DATA_SUCCESS,
  CHANGE_DATA_FAIL,
} from './constants';

const initialState = fromJS({
  list: [],
  loading: false,
  subloading: false,
  error: '',
});

function mainLayoutReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case RESET:
      return initialState;
    case CHANGE_DATA_SUCCESS:
    case GET_DATA_SUCCESS:
      return state
        .set('list', action.data)
        .set('error', '')
        .set('subloading', false)
        .set('loading', false);
    case GET_DATA_FAIL:
      return state
        .set('error', action.error)
        .set('subloading', false)
        .set('loading', false)
        .set('loading', false);
    case CHANGE_DATA:
      return state
        .set('error', '')
        .set('subloading', true)
        .set('loading', false);
    case CHANGE_DATA_FAIL:
      return state
        .set('error', action.error)
        .set('subloading', false)
        .set('loading', false);
    default:
      return state;
  }
}

export default mainLayoutReducer;
