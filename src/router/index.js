import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProfileView from "../views/ProfileView.vue";
import PhotosView from "../views/PhotosView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/photos",
    name: "Photos",
    component: PhotosView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
