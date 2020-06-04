import axios from 'axios';
import './Interceptors'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 封装axios的post请求
export async function fetchPOST(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

// 封装axios的get请求
export async function fetchGET(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    }).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error);
    })

  })
}

export default {
  async mockdata(url, params) {
    return await fetchPOST(url, params);
  },
  fetchPOST: fetchPOST,
  fetchGET: fetchGET
}