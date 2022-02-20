import axios from 'axios'
import { useMutation } from 'react-query'
import { authUrl } from '../config/config'

axios.defaults.baseURL = authUrl

export interface TokenSet {
  accessToken?: string
  refreshToken?: string
  tokenExpires: string
}

export function loadMyInfoAPI() {
  return axios.get('/user')
}

function logInAPI(no: string, password: string): any {
  return axios.post('/login', {
    no,
    password,
  })
}

export const loginRequest = async (no: string, password: string) => {
  const { accessToken, refreshToken, tokenExpires }: TokenSet = await logInAPI(no, password)
  return { accessToken, refreshToken, tokenExpires }
}

export function refreshTokenApi(): any {
  return axios.get('/refreshToken')
}

export const refreshRequest = async () => {
  const { accessToken, refreshToken, tokenExpires }: TokenSet = await refreshTokenApi()
  return { accessToken, refreshToken, tokenExpires }
}
