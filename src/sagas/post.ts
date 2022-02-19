import axios from 'axios'
import { all, fork, throttle, put } from 'redux-saga/effects'
import { backUrl } from '../config/config'
import { LOAD_USER_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS } from '../reducers/post'
axios.defaults.baseURL = backUrl

function loadUserPostsAPI(data, lastId) {
  return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`)
}

function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.data, action.lastId)
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data,
    })
  } catch (err: any) {
    console.error(err)
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error: err.response.data,
    })
  }
}
function* watchLoadUserPosts() {
  yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts)
}

export default function* postSaga() {
  yield all([fork(watchLoadUserPosts)])
}
