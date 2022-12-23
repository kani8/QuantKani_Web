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
      <button @click="applyTheme">Toggle theme</button>
    </nav>

    <section class="kani">
      <div class="console-container">
        <span id="text"></span>
        <div class="console-underscore" id="console">&#95;</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { consoleText } from "../../assets/ts/script";

export default {
  // other options
  mounted: function () {
    consoleText(
      ["Welcome", "My name is Kanishk Vatsavayi", "Explore"],
      "text",
      ["#fa0505", "#fa0505", "white"]
    );
  },
};
</script>
<!-- <script lang="ts">
import { ref, onBeforeMount } from "vue";

// Import the scroll and theme scripts
import scroll from "../../assets/ts/scroll";
import theme from "../../assets/ts/theme";

// Import the script module
import script from "../../assets/ts/script";

export default {
  setup() {
    const count = ref(0);
    const incrementCount = () => {
      count.value++;
    };

    // Use the consoleText function imported from script.ts
    const startConsoleText = () => {
      script.consoleText(
        ["Welcome", "My name is Kanishk Vatsavayi", "Explore"],
        "text",
        ["#fa0505", "#fa0505", "white"]
      );
    };

    // Use the scroll functions imported from scroll.ts
    const goToNextSection = () => {
      scroll.next();
    };
    const goToPreviousSection = () => {
      scroll.previous();
    };

    // Use the toggle function imported from theme.ts
    const toggleTheme = () => {
      theme();
    };

    // Use the onBeforeMount hook to start the console text animation immediately
    onBeforeMount(() => {
      startConsoleText();
    });

    return {
      count,
      incrementCount,
      startConsoleText,
      goToNextSection,
      goToPreviousSection,
      toggleTheme,
    };
  },
};
</script> -->
<!-- <script lang="ts">
import { ref, onBeforeMount } from "vue";

// Import the scroll and theme scripts
import scroll from "src/assets/ts/scroll";
import theme from "src/assets/ts/theme";

// Import the script module
import script from "src/assets/ts/script";

export default {
  setup() {
    const count = ref(0);
    const incrementCount = () => {
      count.value++;
    };

    // Use the consoleText function imported from script.js
    const startConsoleText = () => {
      script.consoleText(
        ["Welcome", "My name is Kanishk Vatsavayi", "Explore"],
        "text",
        ["#fa0505", "#fa0505", "white"]
      );
    };

    // Use the scroll functions imported from scroll.js
    const goToNextSection = () => {
      scroll.next();
    };
    const goToPreviousSection = () => {
      scroll.previous();
    };

    // Use the toggle function imported from theme.js
    const toggleTheme = () => {
      theme.toggle();
    };

    // Use the onBeforeMount hook to start the console text animation immediately
    onBeforeMount(() => {
      startConsoleText();
    });

    return {
      count,
      incrementCount,
      startConsoleText,
      goToNextSection,
      goToPreviousSection,
      toggleTheme,
    };
  },
};
</script> -->

<style scoped src="../../assets/css/style.css"></style>

<!-- <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  
  <script src="/Kani/script.js"></script>
  <script src="/Kani/theme.js"></script>
   -->
