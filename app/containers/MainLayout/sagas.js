import { call, put, cancel, take, takeLatest, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { getLists, updateItem, removeItem, updateList, removeList } from './api';
import { CHANGE_DATA } from './constants';
import {
  getDataSuccess,
  getDataFail,
  changeDataSucess,
  changeDataFail,
} from './actions';

export function* watchGetLists() {
  try {
    const response = yield call(getLists);
    yield put(getDataSuccess(response));
  } catch (e) {
    yield put(getDataFail(e));
  }
}

export function* watchSetData(action) {
  try {
    let response;
    switch (action.method) {
      case 'update':
        response = yield call(updateItem, action.body);
        break;
      case 'remove':
        response = yield call(removeItem, action.body.id);
        break;
      case 'listAdd':
        response = yield call(updateList, action.body);
        break;
      case 'listRemove':
        response = yield call(removeList, action.body.id);
        break;
      default:
    }
    if (response) {
      const list = yield call(getLists);
      yield put(changeDataSucess(list));
    }
  } catch (e) {
    if (e.response.body.error.message === 'Token no encontrado') {
      yield put(push('/'));
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
    yield put(changeDataFail(e.response.body.error.message));
  }
}

export function* defaultSaga() {
  const watcher = yield [
    fork(watchGetLists),
    takeLatest(CHANGE_DATA, watchSetData),
  ];
  yield take(LOCATION_CHANGE);
  yield watcher.map((obj) => cancel(obj));
}
// All sagas to be loaded
export default [
  defaultSaga,
];
