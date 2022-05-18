<template>
    <div class="post-create-page">
    <h1>게시물 작성하기</h1>
    <post-create-form @submit="onSubmit"/>
    </div>
</template>

<script>
import PostCreateForm from '@/components/PostCreateForm'
export default {
    name: 'PostCreatePage',
    components: { PostCreateForm },
    methods: {
    onSubmit (payload) {
        console.log('payload >> ', payload);
    }
  }
}
</script>
