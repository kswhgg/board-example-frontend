import api from '@/api'
import {
    SET_ACCESS_TOKEN,
    FETCH_POST,
    FETCH_POST_LIST
} from './mutation-types'

export default {
  signin ({ commit }, payload) {
    const {email,password} = payload
    return api.post('/auth/signin', {email,password})
    .then(res => {
        const { accessToken } = res.data
        commit(SET_ACCESS_TOKEN, accessToken)
    })
  },
  fetchPostList ({ commit }) {
    return api.get('/posts')
      .then(res => {
        commit(FETCH_POST_LIST, res.data)
      })
  },
  fetchPost ({ commit }, postId) {
    return api.get(`/posts/${postId}`)
      .then(res => {
        commit(FETCH_POST, res.data)
      })
  },
}
