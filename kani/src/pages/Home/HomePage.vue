<template>
  <div id="app">
    <div class="all">
      <router-link to="/my-journey" class="left"></router-link>
      <!-- <div class="left"><router-link to="/my-journey"></router-link></div> -->
      <router-link to="/books" class="center">
        <div class="explainer"><span>Ҝ</span></div>
      </router-link>

      <router-link to="/lessons" class="right">
        <div class="text"></div>
      </router-link>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/styleHome.css"></style>
