<template>
  <nav>
    <h2 @click="goToHome" class="logo">Quant<span>Kani</span></h2>
    <ul>
      <li><a href="/Kani/HTML/Journey.html">Journey</a></li>
      <li><a href="/Kani/HTML/Books.html">Books</a></li>
      <li><a href="/Kani/HTML/Lessons.html">Lessons</a></li>
    </ul>
    <a href="#" class="btn">Subscribe</a>
  </nav>
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

