import api from '@/api'
import {
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    FETCH_POST,
    FETCH_POST_LIST,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO,
} from './mutation-types'

export default {
  signin ({ commit }, payload) {
    const {email,password} = payload
    return api.post('/auth/signin', {email,password})
    .then(res => {
        const { accessToken } = res.data
        commit(SET_ACCESS_TOKEN, accessToken)

        return api.get('/users/me')
    }).then(res => {
      commit(SET_MY_INFO, res.data)
    })
  },
  signout ({ commit }) {
    commit(DESTROY_MY_INFO)
    commit(DESTROY_ACCESS_TOKEN)
  },
  signinByToken ({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token)
    return api.get('/users/me')
      .then(res => {
        commit(SET_MY_INFO, res.data)
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
