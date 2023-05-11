/**
 * Author: Ankita Mohata
 *
 * This higher order component manages the axios response and update the state of the application accordingly
 */

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axiosInstance from '../../config/httpCommon';

const AxiosLayout = ({ children }: any) => {
  const { handlelogout } = useContext(AuthContext);

  useEffect(() => {
    // Configure incoming response interceptor logic
    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        // Any HTTP Code which is not 2xx will be considered as error
        const statusCode = error.response.status;
        if (statusCode === 401 || statusCode === 403) {
          setTimeout(() => {
            handlelogout()
              .then(() => (window.location.href = '/'))
              .catch(() => {});
          }, 4000);
          error.message = `${error.message}. User will be logged out automatically.`;
        }
        return await Promise.reject(error);
      },
    );
  }, []);

  return children;
};

export default AxiosLayout;
