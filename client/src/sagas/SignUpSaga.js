import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from '../actions/SignUpActions';
import { fetchApi } from '../helpers/api';

export function* signUp() {
  yield takeEvery(actions.SIGN_UP, function*({ payload }) {
    let response = yield call(fetchApi, 'post', 'register', payload);
    console.log(response);
    if (!response.error) {
      yield put({
        type: actions.SIGN_UP_SUCCESS
      });
    }
  });
}

export default function* rootSaga() {
  yield [fork(signUp)];
}
