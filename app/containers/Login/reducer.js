/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOGIN_FAIL,
  SEND_LOGIN,
  RESET,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case RESET:
      return initialState;
    case SEND_LOGIN:
      return state
        .set('loading', true)
        .set('error', '');
    case LOGIN_FAIL:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default loginReducer;
