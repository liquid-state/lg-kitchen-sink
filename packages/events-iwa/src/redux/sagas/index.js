import { put, spawn } from 'redux-saga/effects';
import { initialisation } from '@project/common';
import commonApp from '@project/common/src/redux/sagas/app';
import app from './app';
import iwa from './iwa';
import userfiles from './userfiles';
import launch from './launch';

export default function* () {
  yield initialisation.saga();
  yield spawn(commonApp);
  yield spawn(app);
  yield spawn(iwa);
  yield spawn(userfiles);
  yield spawn(launch);
  // Add your sagas here before the put(initialisation.initialise())
  yield put(initialisation.initialise());
}
