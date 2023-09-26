const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38254430-6263a5046068a5a8f98d526e2';

export const fetchImages = async (query, page) => {
  const response = await fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const data = await response.json();
  return data;
};
