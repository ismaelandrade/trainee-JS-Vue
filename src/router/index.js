import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoPage from '../components/todo/TodoPage'
import MoviesPage from '../components/movies/MoviesPage'
import ProductsPage from '../components/shopping/ProductsPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TodoPage
    },
    {
      path: '/movies',
      component: MoviesPage
    },
    {
      path: '/products',
      component: ProductsPage
    }
  ]
})

export default router
