import { getContext, takeLatest, call, put } from "redux-saga/effects";
import { Messages } from "@liquid-state/iwa-core";
import { logger } from "@project/common/src/logging";
import { SEND_PICKFILE_EVENT, UPLOAD_FILE } from "../const";
import { filePicked, filePickingFailed } from "../actions";

export default function* root() {
  yield takeLatest(SEND_PICKFILE_EVENT, sendPickfileEvent);
  yield takeLatest(UPLOAD_FILE, sendUploadEvent);
}

function* sendPickfileEvent({ payload }) {
  const app = yield getContext("app");
  const result = yield call(
    app.communicator.send,
    Messages.userfiles.pickFile("image/*")
  );
  if (result.cancelled) {
    console.log("picking failed or cancelled");
    // yield put(filePickingFailed(id));
    return;
  }
  const file = result.files[0];
  console.log("file:", file);
  console.log("file path:", file.path);

  // logger.log(
  //   "event sent: userfiles/pickfile",
  //   { type: "event_sent", event: msg },
  //   "debug"
  // );

  yield put(filePicked(file.path));

  // yield put(filePicked("This is a file path"));
}

function* sendUploadEvent({ payload }) {
  alert("Modify the upload URL");
  const url = "https://XXXXXX.s3-ap-southeast-2.amazonaws.com/test.mov";
  const options = {
    uploadMethod: "PUT",
    headers: {
      "x-amz-acl": "public-read"
    }
  };
  const app = yield getContext("app");
  const result = yield call(
    app.communicator.send,
    Messages.userfiles.upload(payload.path, url, options)
  );
  console.log(result);
}
