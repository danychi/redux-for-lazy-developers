import { createStructuredSelector } from 'reselect';
import { getResourceByKey } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';
import { getResourceLoadingStatus } from '../../global/loading/selectors';

export default createStructuredSelector({
  posts: getResourceByKey(RESOURCES.posts),
  isLoading: getResourceLoadingStatus(RESOURCES.posts),
});
