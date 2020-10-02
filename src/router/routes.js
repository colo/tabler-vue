// import HorizontalLayout from '../layouts/HorizontalLayout.vue'

/**
* Dynamic Layout
* https://dev.to/lampewebdev/vuejs-pages-with-dynamic-layouts-problems-and-a-solution-4460
*/
import VerticalLayout from '../layouts/VerticalLayout.vue'

const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Index.vue') }
    // ]
    component: () => import('pages/Index.vue'),
    meta: { layout: VerticalLayout }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
