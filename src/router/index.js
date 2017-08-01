import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView.vue'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import BookView from '../views/BookView.vue'
import BroadcastView from '../views/BroadcastView.vue'
import GroupView from '../views/GroupView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/pages'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'broadcast',
          name: 'BroadcastView',
          component: BroadcastView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        }
      ]
    }
  ]
})
