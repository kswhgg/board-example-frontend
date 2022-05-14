import {
  FETCH_POST,
  FETCH_POST_LIST,
} from './mutation-types'

export default {
  [FETCH_POST_LIST] (state, posts) {
    state.posts = posts
  },
  [FETCH_POST] (state, post) {
    state.post = post
  },
}
