import { createStructuredSelector } from 'reselect';
import { getResourceByKey } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';

export default createStructuredSelector({
  ownPosts: getResourceByKey(RESOURCES.profile, 'posts'),
  user: getResourceByKey(RESOURCES.profile, 'user'),
});
