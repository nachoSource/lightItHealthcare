import { UserDescriptionProps } from "./components/users";

interface IAction {
  type: string;
  payload?: any;
}

interface UsersIState {
  currentUser: UserDescriptionProps | null;
  data: UserDescriptionProps | [];
  pending: boolean;
  error: any;
}

export type { IAction, UsersIState };
