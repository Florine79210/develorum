import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";

import MessageModif from "../components/MessageModif.vue"


const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path:"/MessageModif/:id",
    component: MessageModif,
    name:"MessageModif",
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;