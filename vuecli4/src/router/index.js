import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Test1 from '../views/Test1.vue';
import Test2 from '../views/Test2.vue';
import TestUrl from '../views/TestUrl.vue';
import Count from '../views/Count.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue'),
    alias: '/minealias',
    children: [
      { path: 'test1', name: 'test1', component: Test1 },
      { path: 'test2', name: 'test2', component: Test2 },
    ],
  },
  {
    path: '/testUrl/:userId/:userName',
    component: TestUrl,
  },
  {
    // path: '/xx',
    // redirect: '/',
    path: '/xx/:userId/:userName',
    redirect: '/testUrl/:userId/:userName',
  },
  {
    path: '/count',
    component: Count,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
