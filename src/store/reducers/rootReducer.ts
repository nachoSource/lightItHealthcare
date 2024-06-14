import { combineReducers } from "redux";
import usersReducer from "./users";

export const combinedReducers = combineReducers({
  users: usersReducer,
});
