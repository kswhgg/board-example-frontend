import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import PostListPage from '@/pages/PostListPage'
import PostCreatePage from '@/pages/PostCreatePage'
import PostViewPage from '@/pages/PostViewPage'
import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostListPage',
      components: {
        header: AppHeader,
        default: PostListPage
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      components: {
        header: AppHeader,
        default: Signup
      }
    },
    {
      path: '/signin',
      name: 'Signin',
      components: {
        header: AppHeader,
        default: Signin
      }
    },
    {
      path: '/post/create',
      name: 'PostCreatePage',
      components: {
        header: AppHeader,
        default: PostCreatePage
      },
      beforeEnter (to, from, next) {
        const { isAuthorized } = store.getters
        if (!isAuthorized) {
          alert('로그인이 필요합니다!')
          next({ name: 'Signin' })
        }
        next()
      }
    },
    {
      path: '/post/:postId',
      name: 'PostViewPage',
      components: {
        header: AppHeader,
        default: PostViewPage
      },
      props: {
        default: true
      }
    },
  ]
})
