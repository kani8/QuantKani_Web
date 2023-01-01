import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/Home/HomePage.vue";
import Journey from "./pages/Journey/MyJourney.vue";
import Lessons from "./pages/Lessons/LessonsPage.vue";
import Books from "./pages/Books/BookList.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/my-journey",
      name: "journey",
      component: Journey,
    },
    {
      path: "/lessons",
      name: "lessons",
      component: Lessons,
    },
    {
      path: "/books",
      name: "books",
      component: Books,
    },
  ],
});

createApp(App).use(router).mount("#app");
