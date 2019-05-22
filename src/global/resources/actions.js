import {
  FETCH_RESOURCE,
  MODIFY_RESOURCE,
  DELETE_RESOURCE,
  DELETE_RESOURCE_FROM_STORE,
  UPDATE_RESOURCE,
  UPDATE_RESOURCE_FROM_STORE,
  CREATE_RESOURCE,
  CREATE_RESOURCE_IN_STORE,
  CREATE_RESOURCE_FAILURE,
  UPDATE_RESOURCE_FAILURE,
  FETCH_RESOURCE_FAILURE,
  DELETE_RESOURCE_FAILURE,
  FETCH_RESOURCE_SUCCESS,
} from './constants';

/**
 * @param {String} resourcePath
 * @param {Function} apiCall
 * @param {any} params
 * @return {ReduxAction}
 */
export const fetchResource = (resourcePath, apiCall, params) => ({
  type: FETCH_RESOURCE,
  payload: {
    resourcePath,
    apiCall,
    params,
  },
});

export const fetchResourceSuccess = (resourcePath, data) => ({
  type: FETCH_RESOURCE_SUCCESS,
  payload: {
    resourcePath,
    data,
  },
});

export const fetchResourceFailed = () => ({
  type: FETCH_RESOURCE_FAILURE,
});

/**
 * @param {String} resourcePath
 * @param {any} data
 * @return {ReduxAction}
 */
export const modifyResource = (resourcePath, data) => ({
  type: MODIFY_RESOURCE,
  payload: {
    resourcePath,
    data,
  },
});

/**
 * @param {String/<String>} resourcePath
 * @param {Function} deleteApiCall
 * @param {String} id
 * @param {String} idKey
 * @return {ReduxAction}
 */
export const deleteResource = (resourcePath, deleteApiCall, id, idKey) => ({
  type: DELETE_RESOURCE,
  payload: {
    resourcePath,
    deleteApiCall,
    id,
    idKey,
  },
});

export const deleteResourceFailed = () => ({
  type: DELETE_RESOURCE_FAILURE,
});

/**
 * @param {String/<String>} resourcePath
 * @param {Object} id
 * @param {String} idKey
 * @return {ReduxAction}
 */
export const deleteResourceFromStore = (resourcePath, id, idKey) => ({
  type: DELETE_RESOURCE_FROM_STORE,
  payload: {
    resourcePath,
    id,
    idKey,
  },
});

/**
 * @param {String/<String>} resourcePath
 * @param {Function} apiCall
 * @param {Object} item
 * @param {String} idKey
 * @return {ReduxAction}
 */
export const updateResource = (resourcePath, apiCall, item, idKey) => ({
  type: UPDATE_RESOURCE,
  payload: {
    resourcePath,
    apiCall,
    item,
    idKey,
  },
});

export const updateResourceFailed = () => ({
  type: UPDATE_RESOURCE_FAILURE,
});

/**
 * @param {String/<String>} resourcePath
 * @param {Object} updatedItem
 * @param {String} idKey
 * @return {ReduxAction}
 */
export const updateResourceFromStore = (resourcePath, updatedItem, idKey) => ({
  type: UPDATE_RESOURCE_FROM_STORE,
  payload: {
    resourcePath,
    updatedItem,
    idKey,
  },
});

/**
 * @param {Function} apiCall
 * @param {any} params
 * @param {String} resourcePath
 * @param {ReduxAction} successCallbackAction
 * @param {ReduxAction} failureCallbackAction
 * @return {ReduxAction}
 */
export const createResource = (apiCall, params, resourcePath, successCallbackAction, failureCallbackAction) => ({
  type: CREATE_RESOURCE,
  payload: {
    apiCall,
    params,
    resourcePath,
    successCallbackAction,
    failureCallbackAction,
  },
});

/**
 * @param {String} resourcePath
 * @param {Object} item
 * @return {ReduxAction}
 */
export const createResourceInStore = (resourcePath, item) => ({
  type: CREATE_RESOURCE_IN_STORE,
  payload: {
    resourcePath,
    item,
  },
});

export const createResourceFailed = (resourcePath) => ({
  type: CREATE_RESOURCE_FAILURE,
  payload: {
    resourcePath,
  },
});
