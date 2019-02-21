import Vue from 'vue'
import Router from 'vue-router'
import Tasks from './views/Tasks.vue'

Vue.use(Router)

export default new Router({
  // nested-routing
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/editor',
      name: 'editor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Editor.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('./views/Calendar.vue')
    }
  ]
})
