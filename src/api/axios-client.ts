import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

const baseURL = 'https://js-post-api.herokuapp.com/api';

const axiosClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response.data ?? response,
  (error) => {
    let processedError;
    if (error instanceof Error) {
      processedError = error;
    } else if (typeof error === 'string') {
      processedError = new Error(error);
    } else {
      processedError = new Error(JSON.stringify(error));
    }
    return Promise.reject(processedError);
  }
);

export default axiosClient;
