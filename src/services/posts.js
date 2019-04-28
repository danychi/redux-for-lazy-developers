import { get, SERVER_DOMAIN } from '../utils/api';
import { SHOWS_URL } from './shows';

const POSTS_URL = `/posts`;

export const fetchPosts = (showId) => get(`${SERVER_DOMAIN}${SHOWS_URL}/${showId}${POSTS_URL}`);
