import { request } from '../utils/api';
import { SERVER_DOMAIN } from './constants';

const GALLERY_URL = 'gallery';

export const fetchGallery = () => request(`${SERVER_DOMAIN}/${GALLERY_URL}/`);
