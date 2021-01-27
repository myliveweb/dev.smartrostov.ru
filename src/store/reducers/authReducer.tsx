import { AUTH, LOGOUT } from '../types'

export const authReducer: any = (
  state = { user: {} },
  action: { type: string; payload: {} }
) => {
  switch (action.type) {
    case AUTH:
      return { ...state, user: action.payload }
    case LOGOUT:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
