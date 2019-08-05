import { put, spawn } from 'redux-saga/effects';
import { initialisation } from '@project/common';
import app from '@project/common/src/redux/sagas/app';

export default function* () {
  yield initialisation.saga();
  yield spawn(app);
  // Add your sagas here before the put(initialisation.initialise())
  yield put(initialisation.initialise());
}
