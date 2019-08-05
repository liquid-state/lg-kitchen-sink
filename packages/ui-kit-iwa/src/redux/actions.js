import { GO_TO_ROUTE, CHANGE_TABS } from './const';

export const goToRoute = route => ({
  type: GO_TO_ROUTE,
  payload: {
    route,
  },
});

export const changeTabs = hideSettings => ({
  type: CHANGE_TABS,
  payload: {
    hideSettings,
  },
});
