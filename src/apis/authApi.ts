import axios from 'axios'
import { authUrl } from '../config/config'

axios.defaults.baseURL = authUrl

export function loadMyInfoAPI() {
  return axios.get('/user')
}

export function logInAPI(data: any): object {
  return axios.post('/login', data)
}
