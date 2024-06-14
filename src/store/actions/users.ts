import { UserComponentProps } from "../../interfaces/components/users";
import * as types from "./types";

export const selectUser = (data: any) => ({
  type: types.SELECT_USER,
  payload: data,
});

export const fetchUsersRequest = (data: any) => ({
  type: types.FETCH_USERS_REQUEST,
  payload: data,
});

export const fetchUsersSuccess = (data: any) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersFailure = (e: any) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: e,
  };
};

export const editUser = (data: UserComponentProps) => {
  return;
};
