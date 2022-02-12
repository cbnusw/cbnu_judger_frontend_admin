import { all, fork, put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'
import { AnyAction } from 'redux'
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
} from '../reducers/user'
import { authUrl } from '../config/config'

axios.defaults.baseURL = authUrl

function loadMyInfoAPI() {
  return axios.get('/user')
}

function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI)
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    })
  } catch (err: any) {
    console.error(err)
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    })
  }
}

export function logInAPI(data: any): object {
  return axios.post('/login', data)
}

export function* logIn(action: AnyAction): any {
  try {
    const result = yield call(logInAPI, action.data)
    yield put({
      type: LOG_IN_SUCCESS,
    })
    axios.defaults.headers.common['x-access-token'] = result.data.data.accessToken
    localStorage.setItem('accessToken', result.data.data.accessToken)
    localStorage.setItem('refreshToken', result.data.data.refreshToken)
  } catch (err: any) {
    console.error(err)
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo)
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLoadMyInfo)])
}
