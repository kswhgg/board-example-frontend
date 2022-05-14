import api from '@/api'
import {
    FETCH_POST_LIST
} from './mutation-types'

export default {
  fetchPostList ({ commit }) {
    return api.get('/posts')
      .then(res => {
        commit(FETCH_POST_LIST, res.data)
      })
  },
}
