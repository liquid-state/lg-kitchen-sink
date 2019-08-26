import {
  APP_RESET,
  ONLINE_STATUS,
  CHANGE_TABS,
  SEND_CUSTOM_EVENT,
  SEND_PICKFILE_EVENT,
  FILE_PICKED,
  UPLOAD_FILE
} from "./const";

export const appReset = () => ({
  type: APP_RESET,
  payload: {}
});

export const onlineStatus = () => ({
  type: ONLINE_STATUS,
  payload: {}
});

export const changeTabs = hideSettings => ({
  type: CHANGE_TABS,
  payload: {
    hideSettings
  }
});

export const sendCustomEvent = payload => ({
  type: SEND_CUSTOM_EVENT,
  payload
});

export const sendPickfileEvent = payload => ({
  type: SEND_PICKFILE_EVENT,
  payload
});

export const filePicked = filePath => ({
  type: FILE_PICKED,
  payload: {
    filePath
  }
});

export const filePickingFailed = payload => ({
  type: FILE_PICKING_FAILED,
  payload
});

export const sendUploadEvent = payload => ({
  type: UPLOAD_FILE,
  payload
});
