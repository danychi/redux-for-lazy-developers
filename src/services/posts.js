import { request } from '../utils/api';
import { SERVER_DOMAIN } from './constants';

const POSTS_URL = `/posts`;

export const fetchPosts = () => request(`${SERVER_DOMAIN}/${POSTS_URL}/`);
