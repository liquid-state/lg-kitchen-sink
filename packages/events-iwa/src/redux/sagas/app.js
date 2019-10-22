import { getContext, takeLatest, call } from 'redux-saga/effects';
import { Messages } from '@liquid-state/iwa-core';
import { logger } from '@project/common/src/logging';
import {
  APP_RESET, CHANGE_TABS, ONLINE_STATUS, SWITCH_TABS,
} from '../const';

export default function* root() {
  yield takeLatest(APP_RESET, appReset);
  yield takeLatest(ONLINE_STATUS, onlineStatus);
  yield takeLatest(CHANGE_TABS, changeTabs);
  yield takeLatest(SWITCH_TABS, switchTabs);
}

function* appReset() {
  const msg = Messages.app.reset();
  const app = yield getContext('app');
  app.communicator.send(msg);
  logger.log(
    'event sent: app/reset',
    { type: 'event_sent', event: msg },
    'debug',
  );
}

function* onlineStatus() {
  const msg = Messages.app.onlineStatus();
  const app = yield getContext('app');
  yield call(app.communicator.send, msg);
  logger.log(
    'event sent: app/reset',
    { type: 'event_sent', event: msg },
    'debug',
  );
}

function* changeTabs({ payload }) {
  const app = yield getContext('app');
  const data = {
    other: {
      hidden: payload.hideSettings,
    },
  };
  if (payload.hideSettings) {
    data.events = {
      icon_name: 'thumbs-up',
      title: { key: 'Noice' },
    };
  } else {
    data.events = {
      icon_name: 'code',
      title: { key: 'Events' },
    };
  }
  const msg = {
    domain: 'app',
    eventType: 'set_tab_appearance',
    data,
  };
  app.communicator.send(msg);
  logger.log(
    'event sent: app/set_tab_appearance',
    { type: 'event_sent', event: msg },
    'debug',
  );
}

function* switchTabs() {
  const msg = {
    domain: 'app',
    eventType: 'switch_tab',
    data: {
      id: 'ui-kit',
    },
  };
  const app = yield getContext('app');
  yield call(app.communicator.send, msg);
  logger.log(
    'event sent: app/switch_tab',
    { type: 'event_sent', event: msg },
    'debug',
  );
}
