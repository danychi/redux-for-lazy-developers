import { lensPath, path, set } from 'ramda';
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
    case MODIFY_RESOURCE: {
      const { resourcePath, data } = payload;
      const resourceLens = lensPath(resourcePath);
      return set(resourceLens, data, state);
    }
    case CREATE_RESOURCE_IN_STORE: {
      const { resourcePath, item } = payload;
      const resource = path(resourcePath, state);
      const resourceLens = lensPath(resourcePath);
      return set(resourceLens, [item, ...resource], state);
    }
    case UPDATE_RESOURCE_FROM_STORE: {
      const { resourcePath, idKey, updatedItem } = payload;
      return updateResourceItemFromState(state, resourcePath, updatedItem, idKey);
    }
    case DELETE_RESOURCE_FROM_STORE: {
      const { resourcePath, id, idKey } = payload; //eslint-disable-line
      return removeResourceItemFromState(state, resourcePath, id, idKey);
    }
    default:
      return state;
  }
}
