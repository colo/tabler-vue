/**
* Dynamic Layout
* https://dev.to/lampewebdev/vuejs-pages-with-dynamic-layouts-problems-and-a-solution-4460
*/
/**
* Avoid lazy loading or Apps get null $route (and breaks Dynamic Layout)
* https://forum.vuejs.org/t/this-route-only-returns-null-in-app-vue/64006/3
**/
import Index from 'pages/Index.vue'
import Empty from 'pages/Empty.vue'
import Blank from 'pages/Blank.vue'
import Buttons from 'pages/Buttons.vue'
import Cards from 'pages/Cards.vue'
import CardsMasonry from 'pages/CardsMasonry.vue'
import Colors from 'pages/Colors.vue'
import Dropdowns from 'pages/Dropdowns.vue'
import Icons from 'pages/Icons.vue'
import Modals from 'pages/Modals.vue'
import Skeleton from 'pages/Skeleton.vue'
import Tables from 'pages/Tables.vue'
import Calendar from 'pages/Calendar.vue'
import Carousel from 'pages/Carousel.vue'
import Lists from 'pages/Lists.vue'
import Form from 'pages/Form.vue'
import Invoice from 'pages/Invoice.vue'
import Blog from 'pages/Blog.vue'
import Widgets from 'pages/Widgets.vue'
import Search from 'pages/Search.vue'
import Pricing from 'pages/Pricing.vue'
import Users from 'pages/Users.vue'
import License from 'pages/License.vue'
import Gallery from 'pages/Gallery.vue'
import Profile from 'pages/Profile.vue'
import Music from 'pages/Music.vue'
import Welcome from 'pages/Welcome.vue'
import Signin from 'pages/Signin.vue'
import Signup from 'pages/Signup.vue'
import Tos from 'pages/Tos.vue'
import AuthLock from 'pages/AuthLock.vue'
import Typography from 'pages/Typography.vue'
import Markdown from 'pages/Markdown.vue'
import Tabs from 'pages/Tabs.vue'
import Ribbons from 'pages/Ribbons.vue'
import Maintenance from 'pages/Maintenance.vue'
import Lookup from 'pages/Lookup.vue'
import ForgotPassword from 'pages/ForgotPassword.vue'
import Email from 'pages/Email.vue'
import Error from 'pages/Error.vue'
import Activity from 'pages/Activity.vue'
import Wizard from 'pages/Wizard.vue'

const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    name: 'index',
    component: Index,
    // meta: { layout: 'VerticalLayout' },

  },
  {
    path: '/empty',
    name: 'empty',
    component: Empty,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/blank',
    name: 'blank',
    component: Blank,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: Buttons,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/cards',
    name: 'cards',
    component: Cards,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/cards-masonry',
    name: 'cards-masonry',
    component: CardsMasonry,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/colors',
    name: 'colors',
    component: Colors,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/dropdowns',
    name: 'dropdowns',
    component: Dropdowns,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/modals',
    name: 'modals',
    component: Modals,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/skeleton',
    name: 'skeleton',
    component: Skeleton,
    // meta: { layout: 'VerticalLayout' },
  },

  {
    path: '/tables',
    name: 'tables',
    component: Tables,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: Carousel,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/lists',
    name: 'lists',
    component: Lists,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/form-elements',
    name: 'form-elements',
    component: Form,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography,
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: Markdown,
  },

  {
    path: '/tabs',
    name: 'tabs',
    component: Tabs,
  },
  {
    path: '/error404',
    component: Error,
    name: 'error404',
    props: { number: 404, title: 'Oops… You just found an error page', subtitle: 'We are sorry but the page you are looking for was not found'},
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/error500',
    component: Error,
    name: 'error500',
    props: { number: 500, title: 'Oops… You just found an error page', subtitle: 'We are sorry but our server encountered an internal error'},
    meta: { layout: 'EmptyLayout' },
  },
  /**
  * Extras
  **/
  {
    path: '/activity',
    name: 'activity',
    component: Activity,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: Invoice,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/widgets',
    name: 'widgets',
    component: Widgets,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/wizard',
    name: 'wizard',
    component: Wizard,
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/license',
    name: 'license',
    component: License,
    // meta: { layout: 'VerticalLayout' },
  },

  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/music',
    name: 'music',
    component: Music,
    // meta: { layout: 'VerticalLayout' },
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/tos',
    name: 'tos',
    component: Tos,
  },
  {
    path: '/auth-lock',
    name: 'auth-lock',
    component: AuthLock,
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/ribbons',
    name: 'ribbons',
    component: Ribbons,
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: Maintenance,
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/lookup',
    name: 'lookup',
    component: Lookup,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    meta: { layout: 'EmptyLayout' },
  },
  {
    path: '/email',
    name: 'email',
    component: Email,
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: Error,
    props: { number: 404, title: 'Oops… You just found an error page', subtitle: 'We are sorry but the page you are looking for was not found'},
    meta: { layout: 'EmptyLayout' },
  }
]

export default routes
