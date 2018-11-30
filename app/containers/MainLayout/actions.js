/*
 *
 * MainLayout actions
 *
 */

import {
  DEFAULT_ACTION,
  RESET,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  CHANGE_DATA,
  CHANGE_DATA_SUCCESS,
  CHANGE_DATA_FAIL,
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
export function getDataSuccess(data) {
  return {
    type: GET_DATA_SUCCESS,
    data,
  };
}
export function getDataFail(error) {
  return {
    type: GET_DATA_FAIL,
    error,
  };
}
export function changeData(body, method) {
  return {
    type: CHANGE_DATA,
    body,
    method,
  };
}
export function changeDataSucess(data) {
  return {
    type: CHANGE_DATA_SUCCESS,
    data,
  };
}
export function changeDataFail(error) {
  return {
    type: CHANGE_DATA_FAIL,
    error,
  };
}
