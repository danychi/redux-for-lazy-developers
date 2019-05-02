import { createSelector } from 'reselect';
import { prop } from 'ramda';

export const selectResourcesDomain = ({ resources }) => resources;

export const getResourceByKey = (resourceName, key) =>
  createSelector(
    selectResourcesDomain,
    (resources) => (key ? prop(key, resources[resourceName]) : resources[resourceName])
  );
