<template>
  <div id="app">
    <router-view class="router" />
  </div>
</template>

<style>
* {
  margin: 0;
  text-decoration: 0;
}
</style>

<script lang="ts">
export default {
  //...
  mounted() {
    const intro = document.createElement("script");
    intro.setAttribute("src", "./assets/ts/script.ts");
  },
  //...
};
</script>
