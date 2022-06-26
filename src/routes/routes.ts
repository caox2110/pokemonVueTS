import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Details from '../pages/Details.vue';
import Welcome from '../pages/Welcome.vue';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', component: Welcome },
      { path: '/details/:id', component: Details },
    ],
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
