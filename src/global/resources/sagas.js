import { all, takeEvery, put, call } from 'redux-saga/effects';
import isPlainObject from 'lodash/isPlainObject';
import { FETCH_RESOURCE, DELETE_RESOURCE, CREATE_RESOURCE, UPDATE_RESOURCE, RESOURCE_EVENTS } from './constants';
import {
  updateResourceFromStore,
  createResourceInStore,
  deleteResourceFromStore,
  fetchResourceSuccess,
  fetchResourceFailed,
} from './actions';

export function* handleFetchResource({ payload }) {
  const { resourcePath, apiCall, params } = payload;
  const resourceName = resourcePath[0];
  try {
    const data = yield call(apiCall, ...(isPlainObject(params) ? Object.values(params) : [params]));
    yield put(fetchResourceSuccess(resourcePath, data));
  } catch (error) {
    yield put(fetchResourceFailed());
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.errorFetching}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
  }
}

export function* handleDeleteResource({ payload }) {
  const { id, resourcePath, deleteApiCall, idKey } = payload;
  const resourceName = resourcePath[0];
  try {
    yield call(deleteApiCall, id);
    yield put(deleteResourceFromStore(resourcePath, id, idKey));
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.successDeleting}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
  } catch ({ response }) {
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.errorDeleting}-${resourceName}`, {
        composed: true,
        bubbles: true,
        detail: { id, status: response.status },
      })
    );
  }
}

// Handles PUT calls to modify a resource
export function* handleUpdateResource({ payload }) {
  const { apiCall, resourcePath, item, idKey } = payload;
  const resourceName = resourcePath[0];
  try {
    yield call(apiCall, item, item[idKey]);
    yield put(updateResourceFromStore(resourcePath, item, idKey));
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.successUpdating}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
  } catch (error) {
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.errorUpdating}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
  }
}

export function* handleCreateResource({ payload }) {
  try {
    const { apiCall, params, resourcePath, successCallbackAction } = payload;
    const response = yield call(apiCall, params);
    // If a success call back action is defined, the default add to state behavior will be stopped
    if (successCallbackAction) {
      yield put(successCallbackAction(response));
      return;
    }
    yield put(createResourceInStore(resourcePath, response));
  } catch (error) {
    const { failureCallbackAction } = payload;
    if (failureCallbackAction) {
      yield put(failureCallbackAction());
    }
  }
}

export function* watchForDeleteResource() {
  yield takeEvery(DELETE_RESOURCE, handleDeleteResource);
}

export function* watchForFetchResource() {
  yield takeEvery(FETCH_RESOURCE, handleFetchResource);
}

export function* watchForCreateResource() {
  yield takeEvery(CREATE_RESOURCE, handleCreateResource);
}

export function* watchForUpdateResource() {
  yield takeEvery(UPDATE_RESOURCE, handleUpdateResource);
}

export default function*() {
  yield all([watchForUpdateResource(), watchForFetchResource(), watchForDeleteResource(), watchForCreateResource()]);
}
