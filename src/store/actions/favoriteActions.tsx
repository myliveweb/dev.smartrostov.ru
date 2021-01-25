import { ADD_FAVORITE, DEL_FAVORITE } from '../types'

export function addFavorite(id: number) {
  return {
    type: ADD_FAVORITE,
    payload: id,
  }
}

export function delFavorite(id: number) {
  return {
    type: DEL_FAVORITE,
    payload: id,
  }
}
