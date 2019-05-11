import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import ProfilePageComponent from './component';
import connector from './selectors';

export default compose(
  connect(connector),
  withStateHandlers(
    {
      prop: null,
    },
    {
      setProp: () => (prop) => ({ [prop]: prop }),
    }
  )
)(ProfilePageComponent);
