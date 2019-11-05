import { all } from 'redux-saga/effects';
// import itemSagas from '../Items/saga';
import signUpSagas from './SignUpSaga';
import sessionSagas from './LoginSaga';
// import headerSagas from '../Layout/Header/saga';

export default function* rootSaga(getState) {
  yield all([
    // itemSagas(),
    signUpSagas(),
    sessionSagas()
    // headerSagas(),
  ]);
}
