import { request } from '../utils/api';
import { SERVER_DOMAIN } from './constants';

const PROFILE_URL = `/profile`;

export const fetchProfile = () => request(`${SERVER_DOMAIN}/${PROFILE_URL}/`);
