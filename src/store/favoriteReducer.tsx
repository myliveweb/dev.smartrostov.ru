import { ADD_FAVORITE, DEL_FAVORITE } from "./types"

const initialState = () => {

  let init: number[] = []

  const favoriteLocalStorage = window.localStorage.getItem('favoriteList')

  if(favoriteLocalStorage)
    init = JSON.parse(favoriteLocalStorage)

  return { favorite: init }
}

export const favoriteReducer: any = (state = initialState(), action: { type: string, payload: number }) => {
  switch(action.type) {
    case ADD_FAVORITE:
      return { ...state, favorite: [...state.favorite, action.payload] }
    case DEL_FAVORITE:
      return { ...state, favorite: state.favorite.filter(item => item !== action.payload) }
    default: return state
  }
}