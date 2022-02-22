import axios from 'axios'
import { authUrl } from '../config/config'

axios.defaults.baseURL = authUrl

export type TokenSet = {
  accessToken?: string
  refreshToken?: string
  tokenExpires?: string
}

export interface ILogInInfo {
  no: string
  password: string
}

export function loadMyInfoAPI() {
  return axios.get('/user')
}

function logInAPI({ no, password }: ILogInInfo): Promise<TokenSet> {
  return axios.post('/login', {
    no,
    password,
  })
}

export const loginRequest = async ({ no, password }: ILogInInfo): Promise<any> => {
  const { accessToken, refreshToken, tokenExpires } = await logInAPI({ no, password })
  return { accessToken, refreshToken, tokenExpires }
}

export function refreshTokenApi(): any {
  return axios.get('/refreshToken')
}

export const refreshRequest = async () => {
  const { accessToken, refreshToken, tokenExpires }: TokenSet = await refreshTokenApi()
  return { accessToken, refreshToken, tokenExpires }
}

export function logOutApi() {
  return axios.get('/logout')
}

export const getMyInfo = () => {
  return axios.get('/me')
}
