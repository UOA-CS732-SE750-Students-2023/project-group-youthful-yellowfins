import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, PATCH',
    'Access-Control-Allow-Headers':
      'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
  },
});

// Configure outbound request interceptor logic
axiosInstance.interceptors.request.use(
  (config) => {
    // Adding authentication token to every api call
    const token = window.sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => await Promise.reject(error),
);

// Configure incoming response interceptor logic
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Any HTTP Code which is not 2xx will be considered as error
    const statusCode = error.response.status;
    if (statusCode === 401 || statusCode === 403) {
      window.location.href = '/';
    }
    return await Promise.reject(error);
  },
);

export default axiosInstance;
