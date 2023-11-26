import { createRouter, createWebHistory } from "vue-router";

import TaskNotesView from "../views/TaskNotesView.vue"
import HomeView from "../views/HomeView.vue"

const routes =
 [
   {
     path: "/",
     name: "Home",
     component: HomeView,
   },
    {
      path: "/notes/:id",
      name: "TaskNotesView",
      component: TaskNotesView,
      props: true,
    },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
