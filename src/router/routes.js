// import HorizontalLayout from '../layouts/HorizontalLayout.vue'

/**
* Dynamic Layout
* https://dev.to/lampewebdev/vuejs-pages-with-dynamic-layouts-problems-and-a-solution-4460
*/
// import VerticalLayout from '../layouts/VerticalLayout.vue'

const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    name: 'index',
    component: () => import('pages/Index.vue'),
    meta: { layout: 'VerticalLayout' },

  },
  {
    path: '/empty',
    name: 'empty',
    component: () => import('pages/Empty.vue'),
    meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/blank',
    name: 'blank',
    component: () => import('pages/Blank.vue'),
    meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: () => import('pages/Buttons.vue'),
    meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('pages/Cards.vue'),
    meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/dropdowns',
    name: 'dropdowns',
    component: () => import('pages/Dropdowns.vue'),
    meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('pages/Icons.vue'),
    meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/modals',
    name: 'modals',
    component: () => import('pages/Modals.vue'),
    meta: { layout: 'VerticalLayout' },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
