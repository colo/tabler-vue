import { LocalStorage, SessionStorage } from 'quasar'

export default function () {
  return {
    dark: (LocalStorage.getItem('tabler-dark-mode') || 'false') === 'true',
    mode: LocalStorage.getItem('tabler-mode'), // || 'MainLayout'
    fluid: (LocalStorage.getItem('tabler-fluid') || 'false') === 'true',
    // menuAutoExpand: (localStorage['tabler-menu-auto-expand'] || 'false') === 'true',
    // menuMini: (localStorage['tabler-menu-mini'] || 'false') === 'true',
    dashboardColorScheme: LocalStorage.getItem('tabler-dashboard-color-scheme') || 'Standard'
  }
}
