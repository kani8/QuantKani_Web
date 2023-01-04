<template>
  <div id="app">
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
        <button class="mode" @click="applyTheme"></button>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toggleTheme } from "../../assets/ts/theme";

export default defineComponent({
  data() {
    return {
      tracker: 0,
    };
  },
  methods: {
    applyTheme() {
      toggleTheme();
      this.tracker++;
    },
  },
});
</script>
<style src="../../assets/css/style.css"></style>
