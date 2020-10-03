import { LocalStorage, SessionStorage } from 'quasar'

const vertical = {
  topbar: {
    available: true,
    combined: true,
    dark: false
  },
  navbar: {
    available: true,
    right: false,
    dark: true
  }

}

const horizontal = {
  topbar: {
    available: true,
    combined: false,
    dark: false
  },
  navbar: {
    available: true,
    // right: false,
    dark: false
  },

  condensed: false
}

export default function () {
  return {
    dark: (LocalStorage.getItem('tabler-dark-mode') || false) === true,
    mode: LocalStorage.getItem('tabler-mode'), // || 'MainLayout'
    fluid: (LocalStorage.getItem('tabler-fluid') || false) === true,
    VerticalLayout: LocalStorage.getItem('tabler-vertical') || vertical,
    HorizontalLayout: LocalStorage.getItem('tabler-horizontal') || horizontal,
    // menuAutoExpand: (localStorage['tabler-menu-auto-expand'] || 'false') === 'true',
    // menuMini: (localStorage['tabler-menu-mini'] || 'false') === 'true',
    dashboardColorScheme: LocalStorage.getItem('tabler-dashboard-color-scheme') || 'Standard'
  }
}
