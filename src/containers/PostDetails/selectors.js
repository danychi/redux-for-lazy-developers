import { createSelector, createStructuredSelector } from 'reselect';
import { getResourceByPath } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';

const getStateNProps = (state, props) => ({
  state,
  props,
});

export const selectPost = createSelector(getResourceByPath([RESOURCES.posts]), getStateNProps, (posts, { props }) => {
  const selectedPostId = props.match.params.id;
  return Array.isArray(posts) && posts.find((p) => String(p.id) === selectedPostId);
});

export default createStructuredSelector({
  post: selectPost,
});
