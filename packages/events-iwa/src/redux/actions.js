import {
  APP_RESET,
  ONLINE_STATUS,
  CHANGE_TABS,
  SEND_CUSTOM_EVENT,
} from './const';

export const appReset = () => ({
  type: APP_RESET,
  payload: {},
});

export const onlineStatus = () => ({
  type: ONLINE_STATUS,
  payload: {},
});

export const changeTabs = hideSettings => ({
  type: CHANGE_TABS,
  payload: {
    hideSettings,
  },
});

export const sendCustomEvent = payload => ({
  type: SEND_CUSTOM_EVENT,
  payload,
});
