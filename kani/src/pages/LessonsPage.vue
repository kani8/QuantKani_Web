<template>
  <q-layout view="lHh Lpr fFf" class="q-ma-md" style="height: 100%">
    <q-header
      elevated
      class="bg-black text-white shadow-2"
      :style="$q.screen.width < breakpoint ? { paddingBottom: '24px' } : {}"
    >
      <q-toolbar>
        <q-toolbar-title class="heading">
          <router-link class="logo drawer-item-logo" to="/">
            Quant<span>Kani</span>
          </router-link>
        </q-toolbar-title>
        <q-btn
          v-if="!loggedIn && $q.screen.width >= breakpoint"
          flat
          round
          dense
          class="q-ma-xs sign-in-btn"
          label="Sign In"
          @click="signIn"
        ></q-btn>
        <!-- User's name -->
        <span v-if="user && $q.screen.width >= breakpoint" class="user-name">
          {{ user.displayName.split(" ")[0] }}
          <q-btn
            v-if="user && $q.screen.width >= breakpoint"
            flat
            round
            dense
            class="q-ma-xs sign-out-btn"
            @click="logOut"
          >
            <q-icon name="logout" />
          </q-btn>
        </span>
        <q-btn
          v-if="$q.screen.width < breakpoint"
          flat
          round
          dense
          class="q-ma-xs"
          @click="drawer = !drawer"
        >
          <q-icon name="menu" />
        </q-btn>

        <!-- Toggle Theme Button -->
        <q-btn
          v-else
          flat
          round
          dense
          class="q-ma-xs theme-toggle"
          @click="applyTheme"
        >
          <q-icon name="brightness_medium" />
        </q-btn>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        class="pages"
        :style="$q.screen.width > breakpoint ? {} : { display: 'none' }"
      >
        <router-link to="/projects">
          <q-tab name="Projects" label="Projects"></q-tab>
        </router-link>
        <router-link to="/books">
          <q-tab name="Books" label="Books"></q-tab>
        </router-link>
        <router-link to="/experience">
          <q-tab name="Experience" label="Experience"></q-tab>
        </router-link>
      </q-tabs>
    </q-header>
    <q-drawer
      v-model="drawer"
      side="left"
      bordered
      :width="180"
      class="bg-black text-white"
      hide-on-escape
    >
      <q-list link style="font-size: 1.5em">
        <q-item
          v-for="(item, index) in drawerItems"
          :key="index"
          class="drawer-item"
        >
          <q-item-section side>
            <router-link :to="item.link">
              <div class="icon-container drawer-item-logo">
                <q-icon :name="item.icon" color="white" />
                <span class="drawer-item-description">{{
                  item.description
                }}</span>
              </div>
            </router-link>
          </q-item-section>
        </q-item>
        <q-item class="drawer-item theme-toggle-drawer-item">
          <q-item-section side>
            <div class="switch" @click="applyTheme">
              <q-icon name="brightness_medium" color="white" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <PostsByCategory category="experience" @postCreated="fetchPosts" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from "vue";
import state, { setTheme, toggleTheme } from "../assets/ts/theme";
import { useRouter } from "vue-router";
import useUserState from "../server/userState";
import { NewPost, usePosts } from "../server/usePosts";
import PostsByCategory from "./PostsByCategory.vue";

export default defineComponent({
  components: {
    PostsByCategory,
  },
  data() {
    return {
      drawer: false,
      tab: 0,
      breakpoint: 768, // Sets the breakpoint for the width threshold, for mobile devices
      drawerItems: [
        {
          title: "Home",
          link: "/",
          icon: "home",
          description: "Home",
        },
        {
          title: "Projects",
          link: "/projects",
          icon: "folder",
          description: "Projects",
        },
        {
          title: "Books",
          link: "/books",
          icon: "book",
          description: "Books",
        },
        {
          title: "Experience",
          link: "/experience",
          icon: "man",
          description: "Experience",
        },
      ],
    };
  },
  setup() {
    const { user, isAdmin, loggedIn, logOut } = useUserState();
    const { posts, createPost, fetchPosts, editPost, deletePost } = usePosts();
    const newPost = reactive<NewPost>({
      uid: "",
      author: "",
      title: "",
      content: "",
      category: "",
    });

    const currentPost = ref<NewPost | null>(null);

    const updatePost = () => {
      if (currentPost.value && currentPost.value._id) {
        // Ensures _id is available
        editPost(currentPost.value._id, currentPost.value);
      }
    };

    const router = useRouter();

    const applyTheme = () => {
      toggleTheme();
    };

    const signIn = () => {
      router.push("/signin");
    };

    const createNewPost = () => {
      // ensure newPost has a category before trying to create a post
      if (newPost.title && newPost.content && newPost.category) {
        createPost(newPost);
        newPost.title = "";
        newPost.content = "";
      } else {
        // handle error when not all fields are filled
        console.error("All fields must be filled to create a new post.");
      }
    };

    onMounted(() => {
      if (!state.theme) {
        setTheme("dark");
      }
      fetchPosts();
    });

    return {
      loggedIn,
      isAdmin,
      applyTheme,
      signIn,
      user,
      logOut,
      posts,
      newPost,
      createNewPost,
      editPost,
      deletePost,
      fetchPosts,
      currentPost,
      updatePost,
    };
  },
});
</script>

<style scoped>
.q-layout {
  padding-top: 8rem;
}
</style>
