import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Journey from "./pages/Journey/MyJourney.vue";
import Projects from "./pages/Projects/MyProjects.vue";
import Lessons from "./pages/Lessons/LessonsPage.vue";
import Books from "./pages/Books/BookList.vue";
import App from "./App.vue";
const DEFAULT_TITLE = "QK";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "journey",
      component: Journey,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/lessons",
      name: "lessons",
      component: Lessons,
      meta: {
        title: "Lessons",
      },
    },
    {
      path: "/books",
      name: "books",
      component: Books,
      meta: {
        title: "Books",
      },
    },
  ],
});

router.afterEach((to) => {
  document.title = (to.meta.title as string) || DEFAULT_TITLE;
});

createApp(App).use(router).mount("#app");
