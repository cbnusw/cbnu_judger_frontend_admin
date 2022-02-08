import produce from 'immer'
import { AnyAction } from 'redux'

export const initialState: IPostState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
}

export type IPostState = {
  mainPosts: Array<object>
  addPostLoading: boolean
  addPostDone: boolean
  addPostError: Error | null
  loadPostsLoading: boolean
  loadPostsDone: boolean
  loadPostsError: Error | null
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'

const postReducer = (state = initialState, action: AnyAction): IPostState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true
        draft.addPostDone = false
        draft.addPostError = null
        break
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false
        draft.addPostDone = true
        draft.mainPosts.unshift(action.data)
        break
      case ADD_POST_FAILURE:
        draft.addPostLoading = false
        draft.addPostError = action.error
        break
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true
        draft.loadPostsDone = false
        draft.loadPostsError = null
        break
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false
        draft.loadPostsDone = true
        draft.mainPosts = draft.mainPosts.concat(action.data)
        break
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false
        draft.loadPostsError = action.error
        break
      default:
        break
    }
  })
}

export default postReducer
