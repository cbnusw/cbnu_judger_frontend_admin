import produce from 'immer'
import { AnyAction } from 'redux'

export const initialState: IUserState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  loadMyInfoLoading: false, // 내 정보 로딩 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  me: null,
}

export type IUserState = {
  logInLoading: boolean
  logInDone: boolean
  logInError: null | Error
  loadMyInfoLoading: boolean
  loadMyInfoDone: boolean
  loadMyInfoError: null | Error
  me: null | object
}
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST'
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS'
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE'

const reducer = (state = initialState, action: AnyAction): IUserState =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true
        draft.loadMyInfoError = null
        draft.loadMyInfoDone = false
        break
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false
        draft.me = action.data
        draft.loadMyInfoDone = true
        break
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false
        draft.loadMyInfoError = action.error
        break
      case LOG_IN_REQUEST:
        draft.logInLoading = true
        draft.logInError = null
        draft.logInDone = false
        break
      case LOG_IN_SUCCESS:
        draft.logInLoading = false
        draft.logInDone = true
        break
      case LOG_IN_FAILURE:
        draft.logInLoading = false
        draft.logInError = action.error.message
        break
      default:
        break
    }
  })

export default reducer
