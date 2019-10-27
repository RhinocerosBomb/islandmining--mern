import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import {store, history} from '../../redux/store';
import actions from './actions';
import sessionActions from '../../Session/actions';
import {fetchApi} from "../../helpers/api";

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*({}) {
    let response = yield call(fetchApi, 'delete', 'devise/sign_out')
    yield put({
      type: sessionActions.REMOVE_CURRENT_USER,
    })

    history.push('/');
  })
}

export function* fetchCurrentUser() {
  yield takeEvery(actions.FETCH_CURRENT_USER, function*({}) {
    let response = yield call(fetchApi, 'get', 'get_current_user')
    yield put({
      type: sessionActions.LOGIN_SUCCESSFULLY,
      payload: response
    })
  })
}

export default function* rootSaga() {
  yield [
    fork(logout),
    fork(fetchCurrentUser),
  ];
}

