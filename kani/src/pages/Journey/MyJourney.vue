<template>
  <q-layout view="lHh Lpr fFf" class="q-ma-md" style="height: 100%">
    <q-header
      elevated
      class="bg-black text-white shadow-2"
      :style="$q.screen.width < breakpoint ? { paddingBottom: '24px' } : {}"
    >
      <q-toolbar>
        <q-toolbar-title class="heading">
          <router-link class="logo" to="/"> Quant<span>Kani</span></router-link>
        </q-toolbar-title>

        <q-btn
          v-if="$q.screen.width < breakpoint"
          flat
          round
          dense
          class="q-ma-xs"
          @click="drawer = !drawer"
          aria-label="Toggle Sidebar"
        >
          <q-icon name="menu" />
        </q-btn>

        <!-- Toggle Theme Button -->
        <q-btn
          v-else
          flat
          round
          dense
          class="q-ma-xs"
          @click="applyTheme"
          aria-label="Toggle Theme"
        >
          <q-icon name="brightness_medium" />
        </q-btn>
      </q-toolbar>
      <q-tabs
        v-model="tab"
        class="pages"
        :style="$q.screen.width < breakpoint ? { display: 'none' } : {}"
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
      :width="250"
      class="bg-black text-white"
      hide-on-escape
    >
      <q-list link style="font-size: 18px">
        <q-item @click="drawer = !drawer">
          <q-item-side>
            <q-icon name="home" color="white" />
          </q-item-side>
          <q-item-main>
            <router-link to="/" class="text-white">Home</router-link>
          </q-item-main>
        </q-item>
        <q-item @click="drawer = !drawer">
          <q-item-side>
            <q-icon name="folder" color="white" />
          </q-item-side>
          <q-item-main>
            <router-link to="/projects" class="text-white"
              >Projects</router-link
            >
          </q-item-main>
        </q-item>
        <q-item @click="drawer = !drawer">
          <q-item-side>
            <q-icon name="book" color="white" />
          </q-item-side>
          <q-item-main>
            <router-link to="/books" class="text-white">Books</router-link>
          </q-item-main>
        </q-item>
        <q-item @click="drawer = !drawer">
          <q-item-side>
            <q-icon name="school" color="white" />
          </q-item-side>
          <q-item-main>
            <router-link to="/lessons" class="text-white">Lessons</router-link>
          </q-item-main>
        </q-item>
        <q-item @click="applyTheme">
          <q-item-side>
            <q-icon name="brightness_medium" color="white" />
          </q-item-side>
          <q-item-main label="Toggle Theme" />
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="q-pa-md q-ma-md">
      <section class="kani" ref="kani">
        <div class="console-container">
          <span id="text"></span>
          <div class="console-underscore" id="console">&#95;</div>
        </div>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { consoleText } from "../../assets/ts/script";
import state, { setTheme, toggleTheme } from "../../assets/ts/theme";

export default defineComponent({
  data() {
    return {
      drawer: false,
      tab: 0,
      breakpoint: 768, // Set the breakpoint for the width threshold, e.g., 768px for tablets
    };
  },
  mounted() {
    if (!state.theme) {
      setTheme("dark");
    }
    consoleText(this.consoleMessage.texts, "text", this.consoleMessage.colors);
  },

  methods: {
    applyTheme() {
      toggleTheme();
      consoleText(
        this.consoleMessage.texts,
        "text",
        this.consoleMessage.colors
      );
    },
  },
  computed: {
    consoleMessage(): { texts: string[]; colors: string[] } {
      const texts = ["Welcome", "My name is Kanishk Vatsavayi", "Explore"];
      let colors;
      if (state.theme === "light") {
        colors = ["black", "black", "black"];
      } else if (state.theme === "dark") {
        colors = ["#fa0505", "#fa0505", "white"];
      } else {
        colors = ["#fa0505", "#fa0505", "white"]; // default value
      }
      return { texts, colors };
    },
  },
});
</script>

<style src="../../assets/css/style.css"></style>
