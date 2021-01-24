import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { cardReducer } from "./cardReducer";
import { favoriteReducer } from "./favoriteReducer";

export const rootReducer = combineReducers({
  favorite: favoriteReducer,
  card: cardReducer,
  app: appReducer
})
