import { request, post, put, deleteMethod } from '../utils/api';
import { SERVER_DOMAIN } from './constants';

const POSTS_URL = 'posts';

export const fetchPosts = () => request(`${SERVER_DOMAIN}/${POSTS_URL}/`);

export const createPost = async (newPost) => {
  const result = await post(`${SERVER_DOMAIN}/${POSTS_URL}/`, newPost);
  return result;
};

export const updatePost = async (post, id) => {
  const result = await put(`${SERVER_DOMAIN}/${POSTS_URL}/${id}`, post);
  return result;
};

export const deletePost = async (id) => {
  const result = await deleteMethod(`${SERVER_DOMAIN}/${POSTS_URL}/${id}`);
  return result;
};
