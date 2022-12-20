<template>
  <div id="app">
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

<style scoped src="../../assets/css/style.css"></style>
