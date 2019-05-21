import { createStructuredSelector } from 'reselect';
import { getResourceByKey } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';
import { getResourceLoadingStatus } from '../../global/loading/selectors';

export default createStructuredSelector({
  gallery: getResourceByKey(RESOURCES.gallery),
  user: getResourceByKey(RESOURCES.profile, 'user'),
  isLoading: getResourceLoadingStatus(RESOURCES.posts),
  userPosts: getResourceByKey(RESOURCES.profile, 'posts'),
});
