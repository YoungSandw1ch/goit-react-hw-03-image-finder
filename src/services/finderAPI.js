import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

const KEY = '25718154-32288cdf6837b8e29b2d2c309';
const QUERY_TYPE = '&image_type=photo&orientation=horizontal&per_page=12';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `/api/?q=${query}&page=${page}&key=${KEY}${QUERY_TYPE}`
  );
  return response.data;
};
