import {
  HIDE_LOADER,
  HIDE_SIGN_IN,
  HIDE_SIGN_UP,
  MENU_VALUE,
  SHOW_LOADER,
  SHOW_SIGN_IN,
  SHOW_SIGN_UP,
} from '../types'

const initialState = {
  loading: false,
  signInPopUp: false,
  signUpPopUp: false,
  menuValue: '',
}

export const appReducer: any = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
    case HIDE_LOADER:
      return { ...state, loading: false }
    case SHOW_SIGN_IN:
      return { ...state, signInPopUp: true }
    case HIDE_SIGN_IN:
      return { ...state, signInPopUp: false }
    case SHOW_SIGN_UP:
      return { ...state, signUpPopUp: true }
    case HIDE_SIGN_UP:
      return { ...state, signUpPopUp: false }
    case MENU_VALUE:
      return { ...state, menuValue: action.payload }
    default:
      return state
  }
}
