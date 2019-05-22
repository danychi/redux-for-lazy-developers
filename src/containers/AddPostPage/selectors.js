import { createStructuredSelector } from 'reselect';
import { getResourceByKey } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';

export default createStructuredSelector({
  gallery: getResourceByKey(RESOURCES.gallery),
  user: getResourceByKey(RESOURCES.profile, 'user'),
  userPosts: getResourceByKey(RESOURCES.profile, 'posts'),
});
