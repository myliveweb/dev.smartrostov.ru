import axios from "axios";
import { FETCH_CARDS } from "../types/types";
import { showLoader, hideLoader } from "./appActions";

export function fetchCards(offset, limit) {
  return dispatch => {
    dispatch(showLoader())
    axios.get(`https://api.zapolskiy.moscow/v2/?action=card_list&offset=${offset}&limit=${limit}`)
      .then(res => {
        dispatch({ type: FETCH_CARDS, payload: res.data })
        dispatch(hideLoader())
      })
  }
}