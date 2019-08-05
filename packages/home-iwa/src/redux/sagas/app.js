import { getContext, takeLatest } from 'redux-saga/effects';
import { logger } from '@project/common/src/logging';
import { CHANGE_TABS } from '../const';

export default function* root() {
  yield takeLatest(CHANGE_TABS, changeTabs);
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
      other: {
        hidden: payload.hideSettings,
      },
    },
  };
  app.communicator.send(msg);
  logger.log('event sent: app/set_tab_appearance', { type: 'event_sent', event: msg }, 'debug');
}
