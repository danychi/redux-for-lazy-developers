import { createSelector } from 'reselect';
import { prop } from 'ramda';

export const selectLoadingDomain = ({ loading }) => loading;

export const getResourceLoadingStatus = (resourceKey) =>
  createSelector(selectLoadingDomain, (loading) => prop(resourceKey, loading));
