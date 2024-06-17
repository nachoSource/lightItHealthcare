import { UserDescriptionProps } from "../../interfaces/components/users";
import * as types from "./types";

// TODO review this typing
export const createUser = (data: { data: UserDescriptionProps }) => ({
  type: types.CREATE_USER,
  payload: data,
});

export const updateUser = (data: { data: UserDescriptionProps }) => ({
  type: types.UPDATE_USER,
  payload: data,
});

export const selectUser = (data: any) => ({
  type: types.SELECT_USER,
  payload: data,
});

export const fetchUsersRequest = (data: any) => ({
  type: types.FETCH_USERS_REQUEST,
  payload: data,
});

export const fetchUsersSuccess = (data: { data: UserDescriptionProps[] }) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersFailure = (e: any) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: e,
  };
};
