import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/hello-world',
    component: HelloWorld
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
