import { connect } from 'react-redux';
import { compose, withHandlers, branch, renderComponent } from 'recompose';
import connector from './selectors';
import ProfilePageComponent from './component';
import browserHistory from '../../router/history';
import { POST_DETAILS_ROUTE } from '../../router/constants';
import Loader from '../../components/Loader';

export default compose(
  connect(connector),
  withHandlers({
    onClickPost: () => ({ id }) => {
      browserHistory.push(`${POST_DETAILS_ROUTE}/${id}`);
    },
  }),
  branch(({ isLoading }) => isLoading, renderComponent(Loader), renderComponent(ProfilePageComponent))
)();
