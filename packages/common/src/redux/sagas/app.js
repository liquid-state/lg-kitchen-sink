import { getContext, takeLatest } from 'redux-saga/effects';
import { Messages } from '@liquid-state/iwa-core';
import { GO_TO_ROUTE } from '../const';
import { logger } from '../../logging';

export default function* root() {
  yield takeLatest(GO_TO_ROUTE, goToRoute);
}

function* goToRoute({ payload }) {
  const msg = Messages.iwa.navigate(payload.route);
  const app = yield getContext('app');
  app.communicator.send(msg);
  logger.log(
    `event sent: iwa/navigate, route: ${payload.route}`,
    { type: 'event_sent', event: msg },
    'debug',
  );
}
