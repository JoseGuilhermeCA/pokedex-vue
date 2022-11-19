import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContatoView from '..//views/ContatoView.vue'
import PokemonsView from '..//views/PokemonsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contato',
    name: 'contato',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ContatoView
  },
  {
    path: '/pokemons',
    name: 'pokemons',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PokemonsView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
