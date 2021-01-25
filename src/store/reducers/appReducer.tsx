import { HIDE_LOADER, HIDE_SIGN_IN, SHOW_LOADER, SHOW_SIGN_IN } from '../types'

const initialState = {
  loading: false,
  signInPopUp: false,
}

export const appReducer: any = (
  state = initialState,
  action: { type: string }
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
    default:
      return state
  }
}
