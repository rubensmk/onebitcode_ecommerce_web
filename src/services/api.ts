// @ts-nocheck

import axios from 'axios'
import Cookie from 'js-cookie'
import ApiData from '../dtos/ApiData'

const api = axios.create({
  baseURL: 'http://localhost:5212',
})

api.interceptors.response.use((res) => {
  if (res.headers['access-token']) {
    const apiData: ApiData = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid,
    }

    api.defaults.headers = apiData
    Cookie.set('@api-data', apiData)
  }

  return res
})

export default api
