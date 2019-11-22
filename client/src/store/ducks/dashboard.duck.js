import { put, takeLatest } from 'redux-saga/effects';
import { dashboard as getDashboard } from '../../crud/dashboard.crud';

export const actionTypes = {
  Dashboard: '[Dashboard] Action',
  DashboardLoaded: '[Load Dashboard] Action'
};

const initialDashboardState = {
  kycStatus: undefined,
  userInformation: undefined,
  affiliateProgram: undefined,
  cryptocurrencyAddresses: undefined,
  tierRewards: undefined,
  cryptoPrice: {
      dateTime: '',
      BTCUSDT: 0,
      ETHUSDT: 0
  }
};

export const reducer = (state = initialDashboardState, action) => {
  switch (action.type) {
    case actionTypes.DashboardLoaded:
      return action.payload;
    default:
      return state;
  }
};

export const actions = {
  dashboard: () => ({ type: actionTypes.Dashboard }),
  fulfillDashboard: data => ({
    type: actionTypes.DashboardLoaded,
    payload: data
  })
};

export function* saga() {
  yield takeLatest(actionTypes.Dashboard, function* dashboardSaga() {
    const { data } = yield getDashboard();
    yield put(actions.fulfillDashboard(data));
  });
}
