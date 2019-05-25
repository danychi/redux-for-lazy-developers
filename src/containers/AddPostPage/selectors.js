import { createStructuredSelector } from 'reselect';
import { getResourceByPath } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';

export default createStructuredSelector({
  gallery: getResourceByPath([RESOURCES.gallery]),
  user: getResourceByPath([RESOURCES.profile]),
});
