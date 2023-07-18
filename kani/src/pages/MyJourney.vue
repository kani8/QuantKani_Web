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
        <q-btn
          v-if="!user && $q.screen.width >= breakpoint"
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
          v-if="$q.screen.width <= breakpoint"
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
    >
      <q-list style="font-size: 1.5em">
        <q-item
          v-for="(item, index) in drawerItems"
          :key="index"
          class="drawer-item"
          @click="drawerItemClicked(item)"
        >
          <q-item-section side>
            <div
              v-if="item.title !== 'Log out'"
              class="icon-container drawer-item-logo"
            >
              <router-link :to="item.link">
                <q-icon :name="item.icon" color="white" />
                <span class="drawer-item-description">{{
                  item.description
                }}</span>
              </router-link>
            </div>
            <div v-else class="icon-container drawer-item-logo" @click="logOut">
              <q-icon :name="item.icon" color="white" />
              <span class="drawer-item-description">{{
                item.description
              }}</span>
            </div>
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
    <q-page-container class="q-pa-md q-ma-md">
      <section class="kani" ref="kani">
        <div class="console-container">
          <div class="console-wrapper">
            <span id="text"></span>
            <div class="console-underscore" id="console">&#95;</div>
          </div>
        </div>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { consoleText, changeColor, clearIntervals } from "../assets/ts/script";
import state, { setTheme, toggleTheme } from "../assets/ts/theme";
import useUserState from "../server/userState";

interface DrawerItem {
  title: string;
  link: string;
  icon: string;
  description: string;
}

export default defineComponent({
  data() {
    return {
      drawer: false,
      tab: 0,
      breakpoint: 768,
    };
  },
  setup() {
    const { user, isAdmin, loggedIn, logOut } = useUserState();

    const consoleMessage = computed(() => {
      let greeting = user.value
        ? `Welcome, ${
            user.value.displayName ? user.value.displayName.split(" ")[0] : ""
          }`
        : "Welcome";
      const texts = [greeting, "My name is Kanishk Vatsavayi", "Explore"];
      let colors =
        state.theme === "light"
          ? ["black", "black", "black"]
          : ["#fa0505", "#fa0505", "white"];
      return { texts, colors };
    });

    const drawerItems = computed(() => {
      let items: DrawerItem[] = [
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
      ];
      if (!user.value) {
        items.unshift({
          title: "Sign In",
          link: "/signin",
          icon: "account_circle",
          description: "Sign In",
        });
      } else {
        items.unshift({
          title: "Log out",
          link: "/",
          icon: "logout",
          description: "Log out",
        });
      }
      return items;
    });

    onMounted(() => {
      if (!state.theme) {
        setTheme("dark");
      }
      consoleText(
        consoleMessage.value.texts,
        "text",
        consoleMessage.value.colors
      );
    });

    return { user, consoleMessage, logOut, drawerItems };
  },

  methods: {
    applyTheme() {
      toggleTheme();
      changeColor(this.consoleMessage.colors);
    },
    signIn() {
      this.$router.push("/signin");
    },
    drawerItemClicked(item: DrawerItem) {
      if (item.title === "Log out") {
        this.logOut().then(() => {
          this.$router.push("/");
        });
      } else {
        this.$router.push(item.link);
      }
    },
  },
  beforeUnmount() {
    clearIntervals();
  },
});
</script>

<style src="../assets/css/style.css"></style>
