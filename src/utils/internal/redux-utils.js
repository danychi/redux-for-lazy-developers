import { bindActionCreators } from 'redux';

export const mapDispatchers = (dispatchers) => (dispatch) => ({
  ...bindActionCreators(dispatchers, dispatch),
  dispatch,
});
