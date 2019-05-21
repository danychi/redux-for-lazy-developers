import { createSelector, createStructuredSelector } from 'reselect';
import { getResourceByKey } from '../../global/resources/selectors';
import { RESOURCES } from '../../global/resources/constants';

const getStateNProps = (state, props) => ({
  state,
  props,
});

export const selectPost = createSelector(
  getResourceByKey(RESOURCES.profile, 'posts'),
  getResourceByKey(RESOURCES.posts),
  getStateNProps,
  (userPosts, posts, { props }) => {
    const allThePosts = [...userPosts, ...posts];
    const selectedPostId = props.match.params.id;
    return allThePosts.find((p) => String(p.id) === selectedPostId);
  }
);

export default createStructuredSelector({
  post: selectPost,
});
