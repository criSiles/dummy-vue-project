import { createRouter, createWebHistory } from "vue-router";

import ToDoNotesView from "../views/ToDoNotesView.vue";
import ToDoView from "../views/ToDoView.vue"
import HomeView from "../views/HomeView.vue"
import ContactView from "../views/ContactView.vue"
import AboutMeView from "../views/AboutMeView.vue"
import ProjectsWipView from "../views/ProjectsWipView.vue"
import ProjectsDisplayView from "../views/ProjectsDisplayView.vue"
import ShopView from "../views/ShopView.vue"

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
    path: "/workinprogress",
    name: "ProjectsWip",
    component: ProjectsWipView,
  },
  {
    path: "/projects",
    name: "ProjectsDisplay",
    component: ProjectsDisplayView,
  },
  {
    path: "/todo",
    name: "ToDo",
    component: ToDoView,
  },
  {
    path: "/shop",
    name: "Shop",
    component: ShopView,
  },
  {
    path: "/notes/:id",
    name: "ToDoNotesView",
    component: ToDoNotesView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
