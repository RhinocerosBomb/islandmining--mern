import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import {store, history} from '../redux/store';
import actions from './actions';
import {fetchApi} from "../helpers/api";

export function* login() {
  yield takeEvery(actions.LOGIN, function*({payload}) {
    let response = yield call(fetchApi, 'post', 'devise/sign_in', payload)
    if (response.data) {
      yield put({
        type: actions.LOGIN_SUCCESSFULLY,
        payload: response.data
      })

      history.push('/items');
    }
  })
}

export default function* rootSaga() {
  yield [
    fork(login),
  ];
}

