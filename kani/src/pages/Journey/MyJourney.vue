<template>
  <div>
    <nav>
      <router-link to="/"
        ><h2 class="logo">Quant<span>Kani</span></h2></router-link
      >
      <ul>
        <li><router-link to="/my-journey">Journey</router-link></li>
        <li><router-link to="/books">Books</router-link></li>
        <li><router-link to="/lessons">Lessons</router-link></li>
      </ul>
      <button class="mode" @click="applyTheme"></button>
    </nav>

    <section class="kani" ref="kani">
      <div class="console-container">
        <span id="text"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>
    </section>

    <section class="timeline" ref="timeline"></section>
  </div>
</template>

<script lang="ts">
import { consoleText } from "../../assets/ts/script";
import toggle from "../../assets/ts/theme";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tracker: 0,
    };
  },
  methods: {
    applyTheme() {
      toggle();
      this.tracker++;
    },
  },
  computed: {
    consoleMessage(): { texts: string[]; colors: string[] } {
      const texts = ["Welcome", "My name is Kanishk Vatsavayi", "Explore"];
      const colors =
        this.tracker % 2 === 0
          ? ["#fa0505", "#fa0505", "white"]
          : ["black", "black", "black"];
      return { texts, colors };
    },
  },
  mounted() {
    consoleText(this.consoleMessage.texts, "text", this.consoleMessage.colors);
  },
  watch: {
    tracker() {
      consoleText(
        this.consoleMessage.texts,
        "text",
        this.consoleMessage.colors
      );
    },
  },
});
</script>

<style src="../../assets/css/style.css"></style>
