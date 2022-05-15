import {
  FETCH_POST,
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  FETCH_POST_LIST,
} from './mutation-types'
import api from '@/api'
import Cookies from 'js-cookie'

export default {
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      Cookies.set('accessToken', accessToken)
    }
  },
  [SET_MY_INFO] (state, me) {
    if (me) {
      state.me = me
    }
  },
  [FETCH_POST_LIST] (state, posts) {
    state.posts = posts
  },
  [FETCH_POST] (state, post) {
    state.post = post
  },
}
