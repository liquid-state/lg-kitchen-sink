import { put, spawn } from 'redux-saga/effects';
import { initialisation } from '../..';
import app from './app';

export default function* () {
  yield initialisation.saga();
  yield spawn(app);
  // Add your sagas here before the put(initialisation.initialise())
  yield put(initialisation.initialise());
}
