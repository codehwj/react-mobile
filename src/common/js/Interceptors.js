import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(function (config) {
  Toast.loading('Loading...', 1);
  return config;
}, function (error) {
  Toast.hide();
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  Toast.hide();
  return response;
}, function (error) {
  Toast.hide();
  return Promise.reject(error);
});