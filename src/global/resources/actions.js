import {
  FETCH_RESOURCE,
  MODIFY_RESOURCE,
  DELETE_RESOURCE,
  DELETE_RESOURCE_FROM_STORE,
  UPDATE_RESOURCE,
  UPDATE_RESOURCE_FROM_STORE,
  CREATE_RESOURCE,
  CREATE_RESOURCE_IN_STORE,
  CREATE_RESOURCE_FAILED,
} from './constants';

/**
 * @param {String} resourceKey
 * @param {Function} apiCall
 * @param {any} params
 * @param {String} nestIntoKey - Used for nesting the fetched content in a key like 'content'
 * @return {ReduxAction}
 */
export const fetchResource = (resourceKey, apiCall, params, nestIntoKey) => ({
  type: FETCH_RESOURCE,
  payload: {
    resourceKey,
    apiCall,
    params,
    nestIntoKey,
  },
});

/**
 * @param {String} resourceKey
 * @param {any} data
 * @param {String} nestIntoKey - Used for nesting the data in a key like 'content'
 * @return {ReduxAction}
 */
export const modifyResource = (resourceKey, data, nestIntoKey) => ({
  type: MODIFY_RESOURCE,
  payload: {
    resourceKey,
    data,
    nestIntoKey,
  },
});

/**
 * @param {String/<String>} resourceFinder - it can be a key string or a path
 * @param {Function} deleteApiCall
 * @param {String} id
 * @param {String} idKey
 * @return {ReduxAction}
 */
export const deleteResource = (resourceFinder, deleteApiCall, id, idKey) => ({
  type: DELETE_RESOURCE,
  payload: {
    resourceFinder,
    deleteApiCall,
    id,
    idKey,
  },
});

/**
 * @param {String/<String>} resourceFinder - it can be a key string or a path
 * @param {Object} id
 * @param {String} idKey
 * @return {ReduxAction}
 */
export const deleteResourceFromStore = (resourceFinder, id, idKey) => ({
  type: DELETE_RESOURCE_FROM_STORE,
  payload: {
    resourceFinder,
    id,
    idKey,
  },
});

/**
 * @param {String/<String>} resourceFinder - it can be a key string or a path
 * @param {Function} apiCall
 * @param {Object} item
 * @param {String} idKey
 * @return {ReduxAction}
 */
export const updateResource = (resourceFinder, apiCall, item, idKey) => ({
  type: UPDATE_RESOURCE,
  payload: {
    resourceFinder,
    apiCall,
    item,
    idKey,
  },
});

/**
 * @param {String/<String>} resourceFinder - it can be a key string or a path
 * @param {Object} updatedItem
 * @param {String} idKey
 * @return {ReduxAction}
 */
export const updateResourceFromStore = (resourceFinder, updatedItem, idKey) => ({
  type: UPDATE_RESOURCE_FROM_STORE,
  payload: {
    resourceFinder,
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
  type: CREATE_RESOURCE_FAILED,
  payload: {
    resourcePath,
  },
});
