<template>
  <div id="app">
    <div>
      <nav>
        <h2 @click="goToHome" class="logo">Quant<span>Kani</span></h2>
        <ul>
          <li><router-link to="Journey.vue">Journey</router-link></li>
          <li><router-link to="Books.vue">Books</router-link></li>
          <li><router-link to="Lessons.vue">Lessons</router-link></li>
        </ul>
        <a href="#" class="btn"><i>hello</i></a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      window.location.href = "/Kani/HTML/Home.html";
    },
  },
};
</script>

<style src="../../assets/css/style.css"></style>
