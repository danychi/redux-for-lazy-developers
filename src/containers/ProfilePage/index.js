import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import connector from './selectors';
import ProfilePageComponent from './component';
import browserHistory from '../../router/history';
import { POST_DETAILS_ROUTE } from '../../router/constants';

export default compose(
  connect(connector),
  withHandlers({
    onClickPost: () => ({ id }) => {
      browserHistory.push(`${POST_DETAILS_ROUTE}/${id}`);
    },
  })
)(ProfilePageComponent);
