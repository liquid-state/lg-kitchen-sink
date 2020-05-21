import { getContext, takeLatest, call } from 'redux-saga/effects';
// import { Messages } from "@liquid-state/iwa-core";
import { ubiquity, initialisation } from '@project/common';
import { logger } from '@project/common/src/logging';
import { LAUNCH_DOCUMENT, LAUNCH_IWA, LAUNCH_EMAIL } from '../const';

export default function* root() {
  yield takeLatest(LAUNCH_DOCUMENT, launchDocument);
  yield takeLatest(LAUNCH_IWA, launchIWA);
  yield takeLatest(LAUNCH_EMAIL, launchEmail);
}

function* loadContent() {
  yield call(initialisation.waitForInitialisation);
  const app = yield getContext('app');
  yield call(ubiquity.refreshContent, app);
}

function* launchDocument({ payload }) {
  yield loadContent();
  const msg = {
    domain: 'launch',
    eventType: 'document',
    data: {
      product_id: payload.productId,
      page_slug: payload.pageSlug,
    },
  };
  const app = yield getContext('app');
  setTimeout(() => {
    app.communicator.send(msg);
  }, 1000);
  logger.log(
    'event sent: launch/document',
    { type: 'event_sent', event: msg },
    'debug',
  );
}

function* launchIWA({ payload }) {
  const msg = {
    domain: 'launch',
    eventType: 'iwa',
    data: {
      webapp_id: payload.webappId,
    },
  };
  const app = yield getContext('app');
  app.communicator.send(msg);
  logger.log(
    'event sent: launch/iwa',
    { type: 'event_sent', event: msg },
    'debug',
  );
}

function* launchEmail({ payload }) {
  const msg = {
    domain: 'launch',
    eventType: 'email',
    data: payload,
  };
  const app = yield getContext('app');
  app.communicator.send(msg);
  logger.log(
    'event sent: launch/email',
    { type: 'event_sent', event: msg },
    'debug',
  );
}
