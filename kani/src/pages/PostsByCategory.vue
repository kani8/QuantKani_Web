<template>
  <div class="vue-page">
    <!-- Blog Post List -->
    <div v-for="post in filteredPosts" :key="post._id">
      <q-card class="sharp-grey-card">
        <q-card-section>
          <div class="text-h3">{{ post.title }}</div>
          <div class="post-content">{{ post.content }}</div>
        </q-card-section>

        <!-- Conditionally Render Edit/Delete for Admin -->
        <q-card-section v-if="isAdmin">
          <q-btn flat color="primary" @click="currentPost = post">Edit</q-btn>
          <q-btn flat color="primary" v-if="currentPost" @click="updatePost"
            >Update</q-btn
          >
          <q-btn flat color="primary" @click="deletePost(post._id)"
            >Delete</q-btn
          >
        </q-card-section>

        <!-- Edit Post Form -->
        <q-card-section
          v-if="isAdmin && currentPost && currentPost._id === post._id"
        >
          <q-input
            class="sharp-grey-input"
            filled
            v-model="currentPost.title"
            label="Post Title"
          ></q-input>
          <q-input
            class="sharp-grey-input"
            filled
            v-model="currentPost.content"
            label="Post Content"
            type="textarea"
          ></q-input>
          <q-btn flat color="primary" @click="updatePost">Update</q-btn>
        </q-card-section>
      </q-card>
    </div>

    <!-- Create Post Form -->
    <q-select
      v-if="isAdmin"
      filled
      v-model="newPost.category"
      :options="['projects', 'experience', 'books']"
      label="Pages"
    ></q-select>

    <q-card class="sharp-grey-card" v-if="isAdmin">
      <q-card-section>
        <div class="text-h6">Create a New Post</div>
        <q-input
          class="sharp-grey-input"
          filled
          v-model="newPost.title"
          label="Post Title"
        ></q-input>
        <q-input
          class="sharp-grey-input"
          filled
          v-model="newPost.content"
          label="Post Content"
          type="textarea"
        ></q-input>
        <q-btn flat color="primary" @click="createNewPost">Create Post</q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { usePosts } from "../server/usePosts";
import useUserState from "../server/userState";

interface Props {
  category: string;
}

export default defineComponent({
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const {
      posts,
      deletePost,
      createPost,
      newPost,
      currentPost,
      fetchPosts,
      editPost,
    } = usePosts();

    const { isAdmin } = useUserState();

    // Fetch the posts when the component is setup
    fetchPosts();

    const updatePost = () => {
      if (currentPost.value && currentPost.value._id) {
        // Ensures _id is available
        editPost(currentPost.value._id, currentPost.value);
      }
    };

    const filteredPosts = computed(() => {
      return posts.value
        .filter((post) => post.category === props.category)
        .sort(
          (a, b) =>
            new Date(b.timestamp.toString()).getTime() -
            new Date(a.timestamp.toString()).getTime()
        );
    });

    const createNewPost = () => {
      // Ensure that newPost has a category before trying to create a post
      if (newPost.title && newPost.content && newPost.category) {
        createPost(newPost);
        newPost.title = "";
        newPost.content = "";
        context.emit("postCreated"); // Emit event after post creation
      } else {
        // Handle error when not all fields are filled
        console.error("All fields must be filled to create a new post.");
      }
    };

    return {
      filteredPosts,
      deletePost,
      currentPost,
      isAdmin,
      newPost,
      createNewPost,
      updatePost,
    };
  },
});
</script>

<style scoped>
.post-content {
  white-space: pre-line;
}
</style>
