import { createSelector } from 'reselect';
import { path } from 'ramda';

export const selectResourcesDomain = ({ resources }) => resources;

export const getResourceByPath = (resourcePath) =>
  createSelector(selectResourcesDomain, (resources) => path(resourcePath, resources));
