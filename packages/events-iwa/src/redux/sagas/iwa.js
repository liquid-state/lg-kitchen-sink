import { getContext, takeLatest } from 'redux-saga/effects';
// import { Messages } from "@liquid-state/iwa-core";
import { logger } from '@project/common/src/logging';
import { SEND_CUSTOM_EVENT } from '../const';

export default function* root() {
  yield takeLatest(SEND_CUSTOM_EVENT, sendCustomEvent);
}

function* sendCustomEvent({ payload }) {
  // const data = {
  //   // service_id: 'service-1',
  //   tab_id: "home",
  //   purpose: "do-a-thing",
  //   data: {
  //     foo: "some",
  //     bar: "value"
  //   }
  // };
  const msg = {
    domain: 'iwa',
    eventType: 'custom',
    data: payload.requestData,
  };

  const app = yield getContext('app');
  app.communicator.send(msg);
  logger.log(
    'event sent: iwa/custom',
    { type: 'event_sent', event: msg },
    'debug',
  );
}
