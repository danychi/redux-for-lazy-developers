import {
  CREATE_RESOURCE,
  CREATE_RESOURCE_IN_STORE,
  CREATE_RESOURCE_FAILURE,
  UPDATE_RESOURCE,
  UPDATE_RESOURCE_FROM_STORE,
  UPDATE_RESOURCE_FAILURE,
  FETCH_RESOURCE_FAILURE,
  DELETE_RESOURCE_FAILURE,
  FETCH_RESOURCE,
  DELETE_RESOURCE,
  DELETE_RESOURCE_FROM_STORE,
  FETCH_RESOURCE_SUCCESS,
} from '../resources/constants';

export const initialState = {};

export default function loadingReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_RESOURCE:
      return {
        ...state,
        [`${payload.resourcePath[0]}Creating`]: true,
      };
    case FETCH_RESOURCE:
      return {
        ...state,
        [`${payload.resourcePath[0]}Fetching`]: true,
      };
    case UPDATE_RESOURCE:
      return {
        ...state,
        [`${payload.resourcePath[0]}Updating`]: true,
      };
    case DELETE_RESOURCE:
      return {
        ...state,
        [`${payload.resourcePath[0]}Deleting`]: true,
      };
    case CREATE_RESOURCE_IN_STORE:
    case CREATE_RESOURCE_FAILURE: {
      return {
        ...state,
        [`${payload.resourcePath[0]}Creating`]: false,
      };
    }
    case FETCH_RESOURCE_SUCCESS:
    case FETCH_RESOURCE_FAILURE: {
      return {
        ...state,
        [`${payload.resourcePath[0]}Fetching`]: false,
      };
    }
    case UPDATE_RESOURCE_FROM_STORE:
    case UPDATE_RESOURCE_FAILURE: {
      return {
        ...state,
        [`${payload.resourcePath[0]}Updating`]: false,
      };
    }
    case DELETE_RESOURCE_FROM_STORE:
    case DELETE_RESOURCE_FAILURE: {
      return {
        ...state,
        [`${payload.resourcePath[0]}Deleting`]: false,
      };
    }
    default:
      return state;
  }
}
