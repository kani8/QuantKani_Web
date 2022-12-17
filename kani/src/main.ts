import { createApp } from "vue";
import HomePage from "./components/HomePage.vue";
import store from "./store";

// createApp(HomePage).use(store).mount("#app");
// import { createApp } from 'vue'
// import VueRouter from 'vue-router'
// import HomePage from './components/HomePage.vue'
// import Books from './components/Books.vue'
// import Journey from './components/Journey.vue'
// import Lessons from './components/Lessons.vue'
// import store from './store'

createApp(HomePage).use(store).mount("#app");

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: HomePage
//     },
//     {
//       path: '/books',
//       name: 'Books',
//       component: Books
//     },
//     {
//       path: '/journey',
//       name: 'Journey',
//       component: Journey
//     },
//     {
//       path: '/lessons',
//       name: 'Lessons',
//       component: Lessons
//     }
//   ]
// })

// createApp(HoMePage).use(router).mount('#app')
