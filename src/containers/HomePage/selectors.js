import { createStructuredSelector } from 'reselect';
import { getResourceByPath } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';
import { getResourceLoadingStatus } from '../../global/loading/selectors';

export default createStructuredSelector({
  posts: getResourceByPath([RESOURCES.posts]),
  isLoading: getResourceLoadingStatus(`${RESOURCES.posts}Creating`),
  userId: getResourceByPath([RESOURCES.profile, 'id']),
  username: getResourceByPath([RESOURCES.profile, 'username']),
});
