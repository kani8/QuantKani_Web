import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Journey from "./pages/Journey/MyJourney.vue";
import Projects from "./pages/Projects/MyProjects.vue";
import Lessons from "./pages/Lessons/LessonsPage.vue";
import Books from "./pages/Books/BookList.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "journey",
      component: Journey,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
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
