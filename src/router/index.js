import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";
import MessageModif from "../components/MessageModif.vue"

// rajout tuto 
import store from '../store';
import Register from '../views/Register'
import Login from '../views/Login'
// -----------------------------------------------------------------------

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path:"/MessageModif/:id",
    name:"MessageModif",
    component: MessageModif,
  },

// rajout tuto 
  {
    path: '/register',
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  // -------------------------------------------------------------

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


