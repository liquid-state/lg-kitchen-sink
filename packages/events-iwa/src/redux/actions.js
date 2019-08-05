import { APP_RESET, ONLINE_STATUS, CHANGE_TABS } from './const';

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