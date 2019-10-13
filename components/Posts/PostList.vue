<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/shutterstock_1453123070-898x505.jpg"
      title="Hello there"
      previewText="THis mu fisrt post 1"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/shutterstock_1453123070-898x505.jpg"
      title="Hello there 2"
      previewText="THis mu fisrt post 2"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/shutterstock_1453123070-898x505.jpg"
      title="Hello there 3"
      previewText="THis mu fisrt post 3"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
    components: {
        PostPreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>