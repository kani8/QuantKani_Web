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

        <!-- Sign In Button -->
        <!-- Sign In Button -->
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
        <span
          v-if="loggedIn && $q.screen.width >= breakpoint"
          class="user-name"
        >
          {{ user.value.name }}
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
        <router-link to="/lessons">
          <q-tab name="Lessons" label="Lessons"></q-tab>
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
    <Admin v-if="isAdmin.value" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Admin from "./Admin.vue";
import state, { setTheme, toggleTheme } from "../assets/ts/theme";
import { useRouter } from "vue-router";

export default defineComponent({
  data() {
    return {
      drawer: false,
      tab: 0,
      breakpoint: 768, // Sets the breakpoint for the width threshold, e.g., 768px for tablets
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
          title: "Lessons",
          link: "/lessons",
          icon: "school",
          description: "Lessons",
        },
        {
          title: "Sign In",
          link: "/signin",
          icon: "login",
          description: "Sign In",
        },
      ],
    };
  },
  components: {
    Admin,
  },
  setup() {
    const loggedIn = ref(false);
    const user = ref({ role: "guest" }); // Add a ref for the user object
    const router = useRouter();

    const isAdmin = computed(
      () => loggedIn.value && user.value.role === "admin"
    );

    const applyTheme = () => {
      toggleTheme();
    };

    const signIn = () => {
      router.push("/signin");
    };

    return {
      loggedIn,
      isAdmin,
      applyTheme,
      signIn,
      user,
    };
  },

  mounted() {
    if (!state.theme) {
      setTheme("dark");
    }
  },
});
</script>

<style src="../assets/css/style.css"></style>
