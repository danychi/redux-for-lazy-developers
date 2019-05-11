import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import HomePageComponent from './component';
import Loader from '../../components/Loader';
import connector from './selectors';

export default compose(
  connect(connector),
  branch(({ isLoading }) => isLoading, renderComponent(Loader), renderComponent(HomePageComponent))
)();
