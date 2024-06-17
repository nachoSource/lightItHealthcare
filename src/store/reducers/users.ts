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
    case types.CREATE_USER: {
      return { ...state, data: [action.payload, ...state.data] };
    }
    case types.UPDATE_USER: {
      let matchedIndex = null;
      state.data.filter((user, i) => {
        if (user.id === action.payload.id) {
          matchedIndex = i;
          return true;
        }
        return false;
      });

      const finalList = !!matchedIndex
        ? [
            ...state.data.slice(0, matchedIndex),
            action.payload,
            ...state.data.slice(matchedIndex + 1),
          ]
        : state.data;

      return { ...state, data: finalList, currentUser: action.payload };
    }
    case types.SELECT_USER:
      return { ...state, currentUser: action.payload };
    default: {
      return state;
    }
  }
};

export default usersReducer;
