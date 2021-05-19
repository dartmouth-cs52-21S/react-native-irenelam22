import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
// const API_KEY = 'AIzaSyB5-8wSlSa47-UNeuA-547N16vqJ4XJcyM';
const API_KEY = 'AIzaSyCYzMbHRnS9-njeu59V9GGlTSSK6_8UAlo';

const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

export default youtubeSearch;
