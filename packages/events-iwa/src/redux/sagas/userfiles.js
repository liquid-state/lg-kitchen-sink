import {
  getContext, takeLatest, call, put,
} from 'redux-saga/effects';
import { Messages } from '@liquid-state/iwa-core';
// import { logger } from '@project/common/src/logging';
import { SEND_PICKFILE_EVENT, UPLOAD_FILE } from '../const';
import { filePicked } from '../actions';

export default function* root() {
  yield takeLatest(SEND_PICKFILE_EVENT, sendPickfileEvent);
  yield takeLatest(UPLOAD_FILE, sendUploadEvent);
}

function* sendPickfileEvent() {
  const app = yield getContext('app');
  const result = yield call(
    app.communicator.send,
    Messages.userfiles.pickFile('image/*', 'video/*'),
  );
  if (result.cancelled) {
    console.log('picking failed or cancelled');
    // yield put(filePickingFailed(id));
    return;
  }
  const file = result.files[0];
  console.log('file:', file);
  console.log('file path:', file.path);

  // logger.log(
  //   "event sent: userfiles/pickfile",
  //   { type: "event_sent", event: msg },
  //   "debug"
  // );

  yield put(filePicked(file.path));

  // yield put(filePicked("This is a file path"));
}

function* sendUploadEvent({ payload }) {
  const url = 'https://ls-s3tests-au.s3-ap-southeast-2.amazonaws.com/test.mp4';
  const options = {
    uploadMethod: 'PUT',
    headers: {
      'x-amz-acl': 'public-read',
    },
  };
  const app = yield getContext('app');
  const result = yield call(
    app.communicator.send,
    Messages.userfiles.upload(payload.path, url, options),
  );
  console.log(result);
}
