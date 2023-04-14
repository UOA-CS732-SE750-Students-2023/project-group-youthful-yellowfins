import axios from 'axios';

// Configure outbound request interceptor logic
axios.interceptors.request.use(
  (request) => request,
  async (error) => await Promise.reject(error),
);

// Configure incoming response interceptor logic
axios.interceptors.response.use(
  (response) => response,
  async (error) => await Promise.reject(error),
);
