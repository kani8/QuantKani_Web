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
      <a href="#" class="btn"><i>hello</i></a>
    </nav>

    <section class="kani">
      <div class="console-container">
        <span id="text"> Kanishk Vatsavayi </span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/Kani/HTML/Home.html");
    },
  },
};
</script>

<style scoped src="../../assets/css/style.css"></style>

<!-- <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  
  <script src="/Kani/script.js"></script>
  <script src="/Kani/theme.js"></script>
   -->
