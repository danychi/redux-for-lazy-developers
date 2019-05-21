import { connect } from 'react-redux';
import { compose } from 'recompose';
import connector from './selectors';
import PostDetailsComponent from './component';

export default compose(connect(connector))(PostDetailsComponent);
