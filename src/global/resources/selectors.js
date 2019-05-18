import { createSelector } from 'reselect';
import { prop, path } from 'ramda';

export const selectResourcesDomain = ({ resources }) => resources;

export const getResourceByKey = (resourceName, key) =>
  createSelector(selectResourcesDomain, (resources) => {
    if (key) {
      const isKeyAPath = Array.isArray(key);
      return isKeyAPath ? path(key, resources[resourceName]) : prop(key, resources[resourceName]);
    }
    return resources[resourceName];
  });
