import { CHANGE_TABS } from './const';

// eslint-disable-next-line import/prefer-default-export
export const changeTabs = hideSettings => ({
  type: CHANGE_TABS,
  payload: {
    hideSettings,
  },
});
