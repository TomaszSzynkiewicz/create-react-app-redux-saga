import {
  takeLatest,
  put
} from 'redux-saga/effects';

import {
  EXAMPLE_ACTION_REQUESTED,
  exampleActionDone,
  exampleActionFailed
} from '../actions';

import apiMock from '../api/apiMock';

function* exampleActionSaga() {
  try {
    const res = yield apiMock.getMessage();
    yield put(exampleActionDone(res.message));
  } catch (err) {
    yield put(exampleActionFailed(err.message));
  }
}

export default [
  takeLatest(EXAMPLE_ACTION_REQUESTED, exampleActionSaga)
];
