import { lifecycle, compose, branch, renderComponent, withStateHandlers } from 'recompose';
import HomePageComponent from './component';
import Loader from '../../components/Loader';
import { generatePosts } from '../../mock/data';

export default compose(
  withStateHandlers(
    {
      posts: null,
    },
    {
      setPosts: () => (posts) => ({ posts }),
    }
  ),
  lifecycle({
    componentDidMount() {
      const posts = generatePosts();
      console.log(posts);
      this.props.setPosts(posts);
    },
  }),
  branch(({ isShowsLoading }) => isShowsLoading, renderComponent(Loader), renderComponent(HomePageComponent))
)();
