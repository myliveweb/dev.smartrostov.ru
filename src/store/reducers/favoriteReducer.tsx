import { ADD_FAVORITE, DEL_FAVORITE } from '../types'

export const favoriteReducer: any = (
  state = { favorite: [] },
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorite: [...state.favorite, action.payload] }
    case DEL_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((item) => item !== action.payload),
      }
    default:
      return state
  }
}
