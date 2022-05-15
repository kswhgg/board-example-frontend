<template>
<div class="sign-in-page">
  <h3>로그인</h3>
  <signin-form @submit="onSubmit"/>
  <p>회원이 아니신가요? <router-link :to="{ name: 'Signup' }">회원가입 하러가기</router-link></p>
</div>
</template>

<script>
import SigninForm from '@/components/SigninForm'
import api from '@/api'
export default {
  name: 'Signin',
  methods: {
    onSubmit (payload) {
        const {email,password} = payload
        api.post('/auth/signin', {email,password})
        .then(res => {
            const { accessToken } = res.data
            api.defaults.headers.common.Authoriaztion = `Bearer ${accessToken}`
            alert('로그인이 완료되었습니다.')
            this.$router.push({ name: 'PostListPage' })
        })
    },
  },
  components: {
    SigninForm
  }
}
</script>
