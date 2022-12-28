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

    <section class="kani">
      <div class="console-container">
        <span id="text"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>
    </section>

    <section class="timeline"></section>
  </div>
</template>

<script lang="ts">
import { consoleText } from "../../assets/ts/script";
import toggle from "../../assets/ts/theme";
import { ref } from "vue";

export default {
  methods: {
    applyTheme() {
      toggle();
    },
  },
  mounted: function () {
    consoleText(
      ["Welcome", "My name is Kanishk Vatsavayi", "Explore"],
      "text",
      ["#fa0505", "#fa0505", "white"]
    );
  },
};
</script>

<style src="../../assets/css/style.css"></style>
