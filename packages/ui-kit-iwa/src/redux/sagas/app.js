import { getContext, takeLatest } from 'redux-saga/effects';
import { Messages } from '@liquid-state/iwa-core';
import { logger } from '@project/common/src/logging';
import { GO_TO_ROUTE, CHANGE_TABS } from '../const';

export default function* root() {
  yield takeLatest(GO_TO_ROUTE, goToRoute);
  yield takeLatest(CHANGE_TABS, changeTabs);
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

function* changeTabs({ payload }) {
  const app = yield getContext('app');
  const msg = {
    domain: 'app',
    eventType: 'set_tab_appearance',
    data: {
      events: {
        icon_name: 'thumbs-up',
        title: { key: 'Noice' },
      },
      settings: {
        hidden: payload.hideSettings,
      },
    },
  };
  app.communicator.send(msg);
  logger.log('event sent: app/set_tab_appearance', { type: 'event_sent', event: msg }, 'debug');
}
