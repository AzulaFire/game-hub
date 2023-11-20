import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a2a32e2aa0784907a64a55d8f3e72e2a',
  },
});
