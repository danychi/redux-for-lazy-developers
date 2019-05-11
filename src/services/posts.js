import { request, post } from '../utils/api';
import { SERVER_DOMAIN } from './constants';

const POSTS_URL = 'posts';

export const fetchPosts = () => request(`${SERVER_DOMAIN}/${POSTS_URL}/`);

export const createPost = async (newPost) => {
  const result = await post(`${SERVER_DOMAIN}/${POSTS_URL}/`, newPost);
  return result;
};
