import { FETCH_CARDS } from "../types/types"

export const cardReducer: any = (state = { cardList: [] }, action: { type: string, payload: {} }) => {
  switch(action.type) {
    case FETCH_CARDS:
      return { ...state, cardList: action.payload }
    default: return state
  }
}