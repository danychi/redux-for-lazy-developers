import { connect } from 'react-redux';
import { compose, branch, renderComponent, withHandlers, withStateHandlers, withProps, lifecycle } from 'recompose';
import { path } from 'ramda';
import HomePageComponent from './component';
import Loader from '../../components/Loader';
import connector from './selectors';
import { mapDispatchers } from '../../utils/internal/redux-utils';
import { updateResource, deleteResource } from '../../global/resources/actions';
import { RESOURCES, RESOURCE_EVENTS } from '../../global/resources/constants';
import { updatePost, deletePost } from '../../services/posts';
import { createComment } from './utils';

const dispatchers = mapDispatchers({ updateResource, deleteResource });

export default compose(
  connect(
    connector,
    dispatchers
  ),
  withStateHandlers(
    {
      isMoreOptionsModalVisible: false,
      selectedPost: null, // for when the more options modal is open
    },
    {
      updateMoreOptionsModalVisibility: () => (isMoreOptionsModalVisible) => ({ isMoreOptionsModalVisible }),
      updateSelectedPost: () => (selectedPost) => ({ selectedPost }),
    }
  ),
  withHandlers({
    onLike: ({ updateResource }) => (post) => {
      const updatedPost = {
        ...post,
        likedByUser: !post.likedByUser,
        likesCount: post.likesCount + (post.likedByUser ? 1 : -1),
      };
      updateResource(RESOURCES.posts, updatePost, updatedPost, 'id');
    },
    onClickOpenMoreOptions: ({ updateSelectedPost, updateMoreOptionsModalVisibility }) => (post) => {
      updateSelectedPost(post);
      updateMoreOptionsModalVisibility(true);
    },
    deletePost: ({ selectedPost, deleteResource }) => () => {
      // console.log('lol');
      deleteResource(RESOURCES.posts, deletePost, selectedPost.id, 'id');
    },
    onDeleteSuccessful: ({ updateMoreOptionsModalVisibility }) => () => {
      updateMoreOptionsModalVisibility(false);
    },
    onAddComment: ({ updateResource, userId, username }) => (e, post) => {
      e.preventDefault();
      const commentInput = document.getElementById(`add-comment-input-${post.id}`);
      if (commentInput) {
        const comment = commentInput.value;
        const updatedPost = {
          ...post,
          comments: [...post.comments, createComment(comment, userId, username)],
        };
        // Reset input
        commentInput.value = '';
        // Update the post with the new data
        updateResource(RESOURCES.posts, updatePost, updatedPost, 'id');
      }
    },
  }),
  withProps(({ deletePost, selectedPost, userId, updateMoreOptionsModalVisibility }) => {
    const selectedPostUserId = path(['user', 'id'], selectedPost);
    const isSelectedPostMadeByCurrentUser = selectedPostUserId === userId;
    return {
      actions: [
        ...(isSelectedPostMadeByCurrentUser ? [{ text: 'Delete post', isSevere: true, onClick: deletePost }] : []),
        ...(!isSelectedPostMadeByCurrentUser
          ? [{ text: 'Unfollow', isSevere: true, onClick: () => updateMoreOptionsModalVisibility(false) }]
          : []),
        ...(!isSelectedPostMadeByCurrentUser
          ? [{ text: 'Report inappropriate', isSevere: true, onClick: () => updateMoreOptionsModalVisibility(false) }]
          : []),
        { text: 'Go to post', isSevere: false, onClick: () => updateMoreOptionsModalVisibility(false) },
        { text: 'Embed', isSevere: false, onClick: () => updateMoreOptionsModalVisibility(false) },
        { text: 'Share', isSevere: false, onClick: () => updateMoreOptionsModalVisibility(false) },
        { text: 'Copy Link', isSevere: false, onClick: () => updateMoreOptionsModalVisibility(false) },
        { text: 'Cancel', isSevere: false, onClick: () => updateMoreOptionsModalVisibility(false) },
      ],
    };
  }),
  lifecycle({
    componentDidMount() {
      document.addEventListener(`${RESOURCE_EVENTS.successDeleting}-${RESOURCES.posts}`, this.props.onDeleteSuccessful);
    },
    componentWillUnmount() {
      document.removeEventListener(
        `${RESOURCE_EVENTS.successDeleting}-${RESOURCES.posts}`,
        this.props.onDeleteSuccessful
      );
    },
  }),
  branch(({ isLoading }) => isLoading, renderComponent(Loader), renderComponent(HomePageComponent))
)();
