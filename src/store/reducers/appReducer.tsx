import { HIDE_LOADER, SHOW_LOADER } from "../types/types"

const initialState = {
  loading: false
}

export const appReducer: any = (state = initialState, action: { type: string }) => {
  switch(action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
      case HIDE_LOADER:
        return { ...state, loading: false }
    default: return state
  }
}