import { getContext, takeLatest, call } from 'redux-saga/effects';
// import { Messages } from "@liquid-state/iwa-core";
import { ubiquity, initialisation } from '@project/common';
import { logger } from '@project/common/src/logging';
import { LAUNCH_DOCUMENT } from '../const';

export default function* root() {
  yield takeLatest(LAUNCH_DOCUMENT, launchDocument);
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
