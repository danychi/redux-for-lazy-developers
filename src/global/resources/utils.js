import { path, lensPath, set } from 'ramda';

/**
 * @description It will return a copy from the state, removing an item from a specified resource
 * @param {Object} state
 * @param {String/<String>} resourcePath
 * @param {String} id
 * @param {String} idKey
 */
export const removeResourceItemFromState = (state, resourcePath, id, idKey) => {
  // Get the resource, e.g. state['products']
  const resource = path(resourcePath, state);
  // Filter out the desired item
  const updatedContent = resource.filter((element) => element[idKey] !== id);
  // The lens allows us to focus in just one key of an object
  const resourceLens = lensPath(resourcePath);
  /* Returns the result of "setting" the portion of the given data structure focused by the given lens 
 to the given value. */
  return set(resourceLens, updatedContent, state);
};

/**
 * @description It will return a copy from the state, updating the item specified for a resource
 * @param {Object} state
 * @param {String/<String>} resourcePath
 * @param {Object} updatedItem
 * @param {String} idKey
 */
export const updateResourceItemFromState = (state, resourcePath, updatedItem, idKey) => {
  // Get the resource, e.g. state['products']
  const resource = path(resourcePath, state);
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
  const resourceLens = lensPath(resourcePath);
  /* Returns the result of "setting" the portion of the given data structure focused by the given lens
 to the given value. */
  return set(resourceLens, updatedContent, state);
};
