import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import { store, history } from '../store';
import actions from '../actions/LoginActions';
import { fetchApi } from '../helpers/api';

export function* login() {
  yield takeEvery(actions.LOGIN, function*({ payload }) {
    let response = yield call(fetchApi, 'post', 'login', payload);
    if (response.data) {
      yield put({
        type: actions.LOGIN_SUCCESSFULLY,
        payload: response.data
      });

      history.push('/dashboard');
    }
  });
}

export default function* rootSaga() {
  yield [fork(login)];
}
