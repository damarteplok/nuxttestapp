<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Damar',
                title: 'My Awesome Post',
                content: 'super amazing',
                thumbnailLink: 'https://4533x635aus61yamnx2wkfwe-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/shutterstock_1453123070-898x505.jpg'

            }
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>