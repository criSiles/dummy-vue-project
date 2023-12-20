import { createRouter, createWebHistory } from "vue-router";

import TaskNotesView from "../views/TaskNotesView.vue"
import ToDoView from "../views/ToDoView.vue"
import HomeView from "../views/HomeView.vue"
import ContactView from "../views/ContactView.vue"
import AboutMeView from "../views/AboutMeView.vue"
import ProjectsView from "../views/ProjectsView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMeView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
    redirect: {name: "ToDo"}
  },
  {
    path: "/todo",
    name: "ToDo",
    component: ToDoView,
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
