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

<script lang="ts"></script>

<style src="../../assets/css/style.css"></style>
