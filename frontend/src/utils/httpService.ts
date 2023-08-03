import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // console.log('Logging the error', error);
    toast.error('An unexpected error occurred!');
  }

  return Promise.reject(error);
});

export const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete
};