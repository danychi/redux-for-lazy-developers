import { connect } from 'react-redux';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import connector from './selectors';
import AddPostPage from './component';
import { mapDispatchers } from '../../utils/internal/redux-utils';
import { createResource, modifyResource } from '../../global/resources/actions';
import { buildPost } from './utils';
import { createPost } from '../../services/posts';
import { RESOURCES } from '../../global/resources/constants';
import { HOMEPAGE_ROUTE } from '../../router/constants';
import browserHistory from '../../router/history';

const dispatchers = mapDispatchers({ createResource, modifyResource });

export default compose(
  connect(
    connector,
    dispatchers
  ),
  withStateHandlers(
    {
      selectedImage: null,
      step: 0,
      caption: null,
      location: null,
    },
    {
      setSelectedImage: () => (selectedImage) => ({ selectedImage }),
      setStep: () => (step) => ({ step }),
      setCaption: () => (event) => ({ caption: event.target.value }),
      setLocation: () => (event) => ({ location: event.target.value }),
    }
  ),
  withHandlers({
    onSavePost: ({ caption, location, selectedImage, createResource, user }) => (e) => {
      e.preventDefault();
      const newPost = buildPost(selectedImage.photoUrl, caption, location, user);
      createResource([RESOURCES.posts], () => createPost(newPost));
      browserHistory.push(HOMEPAGE_ROUTE);
    },
  })
)(AddPostPage);
