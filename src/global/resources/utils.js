import { path, lensPath, lensProp, set } from 'ramda';

/**
 * @description It will return a copy from the state, removing an item from a specified resource
 * @param {Object} state
 * @param {String/<String>} resourceFinder - it can be a key string or a path
 * @param {String} id
 * @param {String} idKey
 */
export const removeResourceItemFromState = (state, resourceFinder, id, idKey) => {
  const isResourceFinderAPath = Array.isArray(resourceFinder);
  // Get the resource, e.g. state['products']
  const resource = isResourceFinderAPath ? path(resourceFinder, state) : state[resourceFinder];
  // Filter out the desired item
  const updatedContent = resource.filter((element) => element[idKey] !== id);
  // The lens allows us to focus in just one key of an object
  const resourceLens = isResourceFinderAPath ? lensPath(resourceFinder) : lensProp(resourceFinder);
  /* Returns the result of "setting" the portion of the given data structure focused by the given lens 
 to the given value. */
  return set(resourceLens, updatedContent, state);
};

/**
 * @description It will return a copy from the state, updating the item specified for a resource
 * @param {Object} state
 * @param {String/<String>} resourceFinder - it can be a key string or a path
 * @param {Object} updatedItem
 * @param {String} idKey
 */
export const updateResourceItemFromState = (state, resourceFinder, updatedItem, idKey) => {
  const isResourceFinderAPath = Array.isArray(resourceFinder);
  // Get the resource, e.g. state['products']
  const resource = isResourceFinderAPath ? path(resourceFinder, state) : state[resourceFinder];
  // Update the content modifying the updatedItem
  const updatedContent = resource.map(
    (item) =>
      item[idKey] === updatedItem[idKey]
        ? {
            ...item,
            ...updatedItem,
          }
        : item
  );
  // The lens allows us to focus in just one key of an object
  const resourceLens = isResourceFinderAPath ? lensPath(resourceFinder) : lensProp(resourceFinder);
  /* Returns the result of "setting" the portion of the given data structure focused by the given lens
 to the given value. */
  return set(resourceLens, updatedContent, state);
};
