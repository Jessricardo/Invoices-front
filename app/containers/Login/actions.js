/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  SEND_LOGIN,
  LOGIN_SUCCESS,
  RESET,
  LOGIN_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
export function sendLogin(data) {
  return {
    type: SEND_LOGIN,
    data,
  };
}
export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
}
export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error,
  };
}
