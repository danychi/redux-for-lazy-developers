import { all, takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_RESOURCE, DELETE_RESOURCE, CREATE_RESOURCE, UPDATE_RESOURCE, RESOURCE_EVENTS } from './constants';
import {
  updateResourceFromStore,
  createResourceInStore,
  deleteResourceFromStore,
  fetchResourceSuccess,
  fetchResourceFailed,
  createResourceFailed,
  updateResourceFailed,
  deleteResourceFailed,
  createResourceSuccess,
} from './actions';

export function* handleFetchResource({ payload }) {
  const { resourcePath, apiCall } = payload;
  const resourceName = resourcePath[0];
  try {
    const data = yield call(apiCall);
    yield put(fetchResourceSuccess(resourcePath, data));
  } catch (error) {
    yield put(fetchResourceFailed(resourcePath));
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
    yield call(deleteApiCall);
    yield put(deleteResourceFromStore(resourcePath, id, idKey));
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.successDeleting}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
  } catch ({ response }) {
    yield put(deleteResourceFailed(resourcePath));
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
    yield call(apiCall);
    yield put(updateResourceFromStore(resourcePath, item, idKey));
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.successUpdating}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
  } catch (error) {
    yield put(updateResourceFailed(resourcePath));
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.errorUpdating}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
  }
}

export function* handleCreateResource({ payload }) {
  const { apiCall, resourcePath, overwriteSuccessCallback } = payload;
  const resourceName = resourcePath[0];
  try {
    const response = yield call(apiCall);
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.successCreating}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
    yield put(createResourceSuccess(resourcePath));
    if (overwriteSuccessCallback) {
      yield put(overwriteSuccessCallback(response));
      return;
    }
    yield put(createResourceInStore(resourcePath, response));
  } catch (error) {
    yield put(createResourceFailed(resourcePath));
    document.dispatchEvent(
      new CustomEvent(`${RESOURCE_EVENTS.errorCreating}-${resourceName}`, {
        composed: true,
        bubbles: true,
      })
    );
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
