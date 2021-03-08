export const types = {
  APP_CONFIG: {
    TOGGLE_DRAWER: 'APP_CONFIG/TOGGLE_DRAWER',
    RESET_RIGHT_DRAWER: 'APP_CONFIG/RESET_RIGHT_DRAWER',
    OPEN_RIGHT_DRAWER: 'APP_CONFIG/OPEN_RIGHT_DRAWER',
  },
};

export const actions = {
  toggleRightDrawer: () => ({
    type: types.APP_CONFIG.TOGGLE_DRAWER,
  }),
  resetRightDrawer: () => ({
    type: types.APP_CONFIG.RESET_RIGHT_DRAWER,
  }),
  openRightDrawer: () => ({
    type: types.APP_CONFIG.OPEN_RIGHT_DRAWER,
  }),
};

const initState = {
  rightDrawerState: '',
};

export function reducer(state = initState, action) {
  switch (action.type) {
    case types.APP_CONFIG.TOGGLE_DRAWER:  
      return {...state, rightDrawerState: 'toggle'};
    case types.APP_CONFIG.OPEN_RIGHT_DRAWER:
      return {...state, rightDrawerState: 'open'};
    case types.APP_CONFIG.RESET_RIGHT_DRAWER:
      return {...state, rightDrawerState: ''};
    default:
      return state;
  }
}