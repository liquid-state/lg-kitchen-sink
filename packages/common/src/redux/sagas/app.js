import { call, getContext, takeLatest } from 'redux-saga/effects';
import { GO_TO_ROUTE } from '../const';

export default function* root() {
  yield takeLatest(GO_TO_ROUTE, goToRoute);
}

function* goToRoute({ payload }) {
  const history = yield getContext('history');
  yield call(history.push, payload.route);
}
