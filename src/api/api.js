import axios from 'axios'

export const defaultErrorHandler = error => {
  console.log('defaultErrorHandler', error);
  return Promise.reject(error);
};
export const errorHandler = error => {
  return Promise.reject(error.response);
};
export const Header = {
  Authorization: 'Token '
};
const contentType = 'application/json';
const getInitializedApi = (containType, responseType = 'json') => {
  const header = {
    'Accept': contentType,
    'Content-Type': containType,
    'X-JsonResponseCase': 'camel',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
  };
  return axios.create({
    responseType,
    withCredentials: false,
    headers: header
  });
};
export const post = (url, data, options) =>
  getInitializedApi(contentType)
  .post(url, data, options)
  .catch(errorHandler || defaultErrorHandler);
export const get = (url, data) =>
  getInitializedApi(contentType)
  .get(url, data)
  .catch(errorHandler || defaultErrorHandler);
