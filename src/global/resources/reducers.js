import {
  MODIFY_RESOURCE,
  CREATE_RESOURCE_IN_STORE,
  DELETE_RESOURCE_FROM_STORE,
  UPDATE_RESOURCE_FROM_STORE,
} from './constants';
import { updateResourceItemFromState, removeResourceItemFromState } from './utils';

export const initialState = {};

export default function resourcesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case MODIFY_RESOURCE:
      return {
        ...state,
        [payload.resourceKey]: payload.data,
      };
    case CREATE_RESOURCE_IN_STORE: {
      const { resourceKey, contentKey, item } = payload; // eslint-disable-line
      const resource = state[resourceKey]; // eslint-disable-line
      return {
        ...state,
        [resourceKey]: {
          ...resource,
          [contentKey]: [...resource[contentKey], item],
        },
      };
    }
    case UPDATE_RESOURCE_FROM_STORE: {
      const { resourceFinder, idKey, contentKey, updatedItem } = payload;
      return updateResourceItemFromState(state, resourceFinder, updatedItem, idKey, contentKey);
    }
    case DELETE_RESOURCE_FROM_STORE: {
      const { resourceFinder, id, idKey, contentKey } = payload; //eslint-disable-line
      return removeResourceItemFromState(state, resourceFinder, id, idKey, contentKey);
    }
    default:
      return state;
  }
}
