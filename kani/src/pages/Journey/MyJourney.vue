<template>
  <q-layout view="lHh Lpr fFf" class="q-ma-md" style="height: 100%">
    <q-header elevated class="bg-black text-white shadow-2">
      <q-toolbar>
        <q-toolbar-title class="heading"
          >Quant<span>Kani</span></q-toolbar-title
        >
        <q-btn
          flat
          round
          dense
          class="q-ma-xs"
          @click="drawer = !drawer"
          aria-label="Toggle Sidebar"
        >
          <q-icon name="menu" />
        </q-btn>
      </q-toolbar>
      <q-tabs v-model="tab" class="pages">
        <router-link to="/projects"
          ><q-tab name="Projects" label="Projects"></q-tab
        ></router-link>
        <router-link to="/books"
          ><q-tab name="Books" label="Books"></q-tab
        ></router-link>
        <router-link to="/lessons"
          ><q-tab name="Lessons" label="Lessons"></q-tab
        ></router-link>
      </q-tabs>
    </q-header>
    <q-drawer
      v-model="drawer"
      side="right"
      bordered
      :width="250"
      class="bg-black text-white"
      hide-on-escape
    >
      <q-list link>
        <q-item>
          <q-item-side>
            <q-icon name="home" color="white" />
          </q-item-side>
          <q-item-main label="Home" />
        </q-item>
        <q-item>
          <q-item-side>
            <q-icon name="folder" color="white" />
          </q-item-side>
          <q-item-main label="Projects" />
        </q-item>
        <q-item>
          <q-item-side>
            <q-icon name="book" color="white" />
          </q-item-side>
          <q-item-main label="Books" />
        </q-item>
        <q-item>
          <q-item-side>
            <q-icon name="school" color="white" />
          </q-item-side>
          <q-item-main label="Lessons" />
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
