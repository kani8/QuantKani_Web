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
    <q-page-container class="q-pa-md q-ma-md"> </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toggleTheme } from "../../assets/ts/theme";

export default defineComponent({
  data() {
    return {
      drawer: false,
      tab: 0,
    };
  },
  methods: {
    applyTheme() {
      toggleTheme();
    },
  },
});
</script>

<style src="../../assets/css/style.css"></style>
