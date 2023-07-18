<template>
  <div>
    <h2>Admin Panel</h2>
    <div class="admin-actions">
      <button @click="createBlogPost">Create Blog Post</button>
    </div>
    <div v-for="(post, index) in blogPosts" :key="index" class="blog-post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <div class="actions">
        <button @click="editBlogPost(post)">Edit</button>
        <button @click="deleteBlogPost(post._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AdminPanel",
  setup() {
    const blogPosts = ref([]);
    const router = useRouter();

    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("/api/blog-posts");
        blogPosts.value = response.data;
      } catch (error: unknown) {
        console.error("Error fetching blog posts:", (error as Error).message);
      }
    };

    const createBlogPost = () => {
      // Redirect the user to the Create Blog Post page
      router.push("/create-blog-post");
    };

    interface BlogPost {
      _id: string;
      title: string;
      content: string;
    }

    const editBlogPost = (post: BlogPost) => {
      // Redirect the user to the Edit Blog Post page, passing the postId as a parameter
      router.push({ name: "EditBlogPost", params: { postId: post._id } });
    };

    const deleteBlogPost = async (postId: string) => {
      try {
        await axios.delete(`/api/blog-posts/${postId}`);
        fetchBlogPosts();
      } catch (error: unknown) {
        console.error("Error deleting blog post:", (error as Error).message);
      }
    };

    fetchBlogPosts();

    return {
      blogPosts,
      createBlogPost,
      editBlogPost,
      deleteBlogPost,
    };
  },
});
</script>

<style scoped>
/* Add any required styling for the admin panel here */
.admin-actions {
  margin-bottom: 1em;
}

.blog-post {
  margin-bottom: 1em;
}

.actions {
  display: flex;
  gap: 0.5em;
}
</style>
