import axios from 'axios';

const API_KEY = '36428797-c5f1263656ed2ca410039acad';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });
  return response.data.hits;
};
