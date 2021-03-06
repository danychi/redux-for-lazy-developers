import Loadable from 'react-loadable';
import { HOMEPAGE_ROUTE, NOT_FOUND_ROUTE, PROFILE_ROUTE, ADD_POST_ROUTE, POST_DETAILS_ROUTE } from './constants';
import Loader from '../components/Loader';

const routeConfig = [
  {
    path: HOMEPAGE_ROUTE,
    name: 'homePage',
    exact: true,
    getModules: () => import('../containers/HomePage'),
  },
  {
    path: PROFILE_ROUTE,
    name: 'profilePage',
    exact: true,
    getModules: () => import('../containers/ProfilePage'),
  },
  {
    path: `${POST_DETAILS_ROUTE}/:id`,
    name: 'postDetails',
    getModules: () => import('../containers/PostDetails'),
  },
  {
    path: ADD_POST_ROUTE,
    name: 'addPostPage',
    exact: true,
    getModules: () => import('../containers/AddPostPage'),
  },
  {
    name: 'notFoundPage',
    path: NOT_FOUND_ROUTE,
    getModules: () => import('../containers/NotFoundPage'),
  },
];

const getRoute = ({ path, name, getModules, ...props }) => ({
  path,
  name,
  component: Loadable({
    loader: getModules,
    loading: Loader,
    delay: 300,
  }),
  ...props,
});

export default function createRoutes() {
  return routeConfig.map((route) => getRoute(route));
}
