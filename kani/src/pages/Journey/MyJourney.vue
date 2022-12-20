<template>
  <div>
    <nav>
      <h2 @click="goToHome" class="logo">Quant<span>Kani</span></h2>
      <ul>
        <li><a href="/Kani/HTML/Journey.html">Journey</a></li>
        <li><a href="/Kani/HTML/Books.html">Books</a></li>
        <li><a href="/Kani/HTML/Lessons.html">Lessons</a></li>
      </ul>
      <a href="#" class="toggle-mode"><i>hello</i></a>
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

<style src="../../assets/css/style.css"></style>

<!-- <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  
  <script src="/Kani/script.js"></script>
  <script src="/Kani/theme.js"></script>
   -->
