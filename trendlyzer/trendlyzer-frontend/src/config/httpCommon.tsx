import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
const token = sessionStorage.getItem('token') || '';

export default axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, PATCH',
    'Access-Control-Allow-Headers':
      'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
    Authorization: `Bearer ${token}`,
  },
});
