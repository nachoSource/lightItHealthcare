import * as types from "../actions/types";
import { UsersIState, IAction } from "../../interfaces/store";

const initialState: UsersIState = {
  currentUser: null,
  data: [],
  pending: false,
  error: null,
};

const usersReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST: {
      return {
        ...state,
        pending: true,
        error: false,
      };
    }
    case types.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        pending: false,
        error: false,
      };
    }
    case types.FETCH_USERS_FAILURE: {
      return {
        ...state,
        data: null,
        pending: false,
        error: true,
      };
    }
    case types.SELECT_USER:
      return { ...state, currentUser: action.data };
    default: {
      return state;
    }
  }
};

export default usersReducer;
