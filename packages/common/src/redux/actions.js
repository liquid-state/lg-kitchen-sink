import { GO_TO_ROUTE } from './const';

// eslint-disable-next-line import/prefer-default-export
export const goToRoute = route => ({
  type: GO_TO_ROUTE,
  payload: {
    route,
  },
});
