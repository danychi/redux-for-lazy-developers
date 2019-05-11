/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in configureStore.js, reducers wouldn't be hot reloadable.
 */

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from './router/history';
import resourcesReducer from './global/resources/reducers';
import loadingReducer from './global/loading/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  const reducers = combineReducers({
    ...asyncReducers,
    resources: resourcesReducer,
    loading: loadingReducer,
  });
  // TODO possible improvement, move it as a 'withReducer' in the App container
  return connectRouter(history)(reducers);
}
