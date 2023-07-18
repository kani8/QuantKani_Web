import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Journey from "./pages/MyJourney.vue";
import Projects from "./pages/MyProjects.vue";
import Lessons from "./pages/LessonsPage.vue";
import Books from "./pages/BookList.vue";
import Signin from "./pages/SignIn.vue";
import RegisterUser from "./pages/RegisterUser.vue";
import ForgotPassword from "./pages/ForgotPassword.vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
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
    {
      path: "/signin",
      name: "Signin",
      component: Signin,
    },
    {
      path: "/registerUser",
      name: "RegisterUser",
      component: RegisterUser,
    },
    {
      path: "/forgotPassword",
      name: "forgotPassword",
      component: ForgotPassword,
    },
  ],
});

router.afterEach((to) => {
  document.title = (to.meta.title as string) || DEFAULT_TITLE;
});

createApp(App).use(Quasar, quasarUserOptions).use(router).mount("#app");
