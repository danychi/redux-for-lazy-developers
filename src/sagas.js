import { all } from 'redux-saga/effects';
import resourcesSaga from './global/resources/sagas';

// Insert new async saga here
function* rootSaga() {
  yield all([resourcesSaga()]);
}

export default rootSaga;
