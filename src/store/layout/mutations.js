
export function SET_DARK (state, { dark }) {
  localStorage['tabler-dark-mode'] = dark
  state.dark = dark
}

export function SET_MODE (state, { mode }) {
  localStorage['tabler-mode'] = mode
  state.mode = mode
}

export function SET_FLUID (state, { fluid }) {
  localStorage['tabler-fluid'] = fluid
  state.fluid = fluid
}
// export function SET_MENU_AUTO_EXPAND (state, { menuAutoExpand }) {
//   localStorage['tabler-menu-auto-expand'] = menuAutoExpand
//   state.menuAutoExpand = menuAutoExpand
// }
// export function SET_MENU_MINI (state, { menuMini }) {
//   localStorage['tabler-menu-mini'] = menuMini
//   state.menuMini = menuMini
// }
export function SET_DASHBOARD_COLOR_SCHEME (state, { dashboardColorScheme }) {
  localStorage['tabler-dashboard-color-scheme'] = dashboardColorScheme
  state.dashboardColorScheme = dashboardColorScheme
}
