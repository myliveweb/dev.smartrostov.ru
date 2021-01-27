import { AUTH } from '../types'

export const authReducer: any = (
  state = { user: {} },
  action: { type: string; payload: {} }
) => {
  switch (action.type) {
    case AUTH:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
