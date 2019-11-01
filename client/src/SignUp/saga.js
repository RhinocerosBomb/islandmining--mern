import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import {fetchApi} from "../helpers/api";

export function* signUp() {
  yield takeEvery(actions.SIGN_UP, function*({payload}) {
    let response = yield call(fetchApi, 'post', 'register', payload)
    if (response.status == 'success') {
      yield put({
        type: actions.SIGN_UP_SUCCESS
      })
    }
  })
}

export default function* rootSaga() {
  yield [
    fork(signUp),
  ];
}

