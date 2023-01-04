<template>
  <div>
    <nav>
      <router-link to="/"
        ><h2 class="logo">Quant<span>Kani</span></h2></router-link
      >
      <ul>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/books">Books</router-link></li>
        <li><router-link to="/lessons">Lessons</router-link></li>
      </ul>
      <button
        class="mode"
        aria-label="Switch Theme"
        @click="applyTheme"
      ></button>
    </nav>

    <section class="kani" ref="kani">
      <div class="console-container">
        <span id="text"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { consoleText } from "../../assets/ts/script";
import state, { setTheme, toggleTheme } from "../../assets/ts/theme";

export default defineComponent({
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
