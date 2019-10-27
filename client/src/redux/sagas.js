import { all } from 'redux-saga/effects';
import itemSagas from '../Items/saga';
import signUpSagas from '../SignUp/saga';
import sessionSagas from '../Session/saga';
import headerSagas from '../Layout/Header/saga';

export default function* rootSaga(getState) {
  yield all([
    itemSagas(),
    signUpSagas(),
    sessionSagas(),
    headerSagas(),
  ]);
}
