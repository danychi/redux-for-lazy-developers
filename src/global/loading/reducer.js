import { CREATE_RESOURCE, CREATE_RESOURCE_IN_STORE, CREATE_RESOURCE_FAILED } from '../resources/constants';

export const initialState = {};

export default function loadingReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_RESOURCE:
      return {
        ...state,
        [payload.resourcePath[0]]: true,
      };
    case CREATE_RESOURCE_IN_STORE:
    case CREATE_RESOURCE_FAILED: {
      return {
        ...state,
        [payload.resourcePath[0]]: false,
      };
    }
    default:
      return state;
  }
}
