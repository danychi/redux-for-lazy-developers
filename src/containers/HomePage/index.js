import { connect } from 'react-redux';
import { compose, branch, renderComponent, withStateHandlers, withHandlers, lifecycle } from 'recompose';
import HomePageComponent from './component';
import Loader from '../../components/Loader';
import connector from './selectors';
import { generateOwnPosts } from '../../mock/data';

export default compose(
  connect(connector),
  withStateHandlers(
    {
      prop: null,
    },
    {
      setProp: () => (prop) => ({ [prop]: prop }),
    }
  ),
  withHandlers({}),
  branch(({ isShowsLoading }) => isShowsLoading, renderComponent(Loader), renderComponent(HomePageComponent))
)();