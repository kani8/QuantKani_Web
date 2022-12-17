<template>
  <div class="all">
    <div @click="navigateTo('Journey.vue')" class="left"></div>
    <div @click="navigateTo('Books.vue')" class="center">
      <div class="explainer"><span>Ҝ</span></div>
    </div>
    <div @click="navigateTo('Lessons.vue')" class="right">
      <div class="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style
  src="/Users/kanis/Desktop/QuantKani/kani/src/assets/css/styleHome.css"
></style>
