import { combineReducers } from "redux";
import { candidateReducer } from "./candidateReducer";

export const reducers = combineReducers({
  candidateReducer: candidateReducer
});
