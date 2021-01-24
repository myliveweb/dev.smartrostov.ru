import { ADD_FAVORITE, DEL_FAVORITE } from "../types/types";

export function addFavorite(id) {
  return {
    type: ADD_FAVORITE,
    payload: id
  }
}

export function delFavorite(id) {
  return {
    type: DEL_FAVORITE,
    payload: id
  }
}