import { all, fork } from 'redux-saga/effects';

export function* forkAllSagas(sagas) {
  yield all(sagas.map(fork));
}
