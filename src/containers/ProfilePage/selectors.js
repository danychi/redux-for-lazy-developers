import { createSelector, createStructuredSelector } from 'reselect';
import { getResourceByPath } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';
import { getResourceLoadingStatus } from '../../global/loading/selectors';

export const selectUserPosts = createSelector(
  getResourceByPath([RESOURCES.posts]),
  getResourceByPath([RESOURCES.profile]),
  (posts, user) => user && Array.isArray(posts) && posts.filter((p) => p.user.id === user.id)
);

export default createStructuredSelector({
  ownPosts: selectUserPosts,
  user: getResourceByPath([RESOURCES.profile]),
  isLoading: getResourceLoadingStatus(`${RESOURCES.posts}Fetching`),
});
