<template>
<div class="sign-in-page">
  <h3>로그인</h3>
  <signin-form @submit="onSubmit"/>
  <p>회원이 아니신가요? <router-link :to="{ name: 'Signup' }">회원가입 하러가기</router-link></p>
</div>
</template>

<script>
import SigninForm from '@/components/SigninForm'
export default {
  name: 'Signin',
  methods: {
    onSubmit (payload) {
        console.log('payload -> ', payload)
    },
  },
  components: {
    SigninForm
  }
}
</script>
