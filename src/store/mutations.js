import {
  FETCH_POST,
  SET_ACCESS_TOKEN,
  FETCH_POST_LIST,
} from './mutation-types'
import api from '@/api'

export default {
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    }
  },
  [FETCH_POST_LIST] (state, posts) {
    state.posts = posts
  },
  [FETCH_POST] (state, post) {
    state.post = post
  },
}
