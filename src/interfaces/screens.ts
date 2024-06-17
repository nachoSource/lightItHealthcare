import { PropsWithChildren } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { UserDescriptionProps } from "./components/users";

type HomeScreenProps = PropsWithChildren<{
  error: boolean;
  pending: boolean;
  users: UserDescriptionProps[];
  createUser: Function;
  onMount: Function;
}>;

type UserScreenProps = PropsWithChildren<{
  error: Boolean;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  pending: Boolean;
  user: UserDescriptionProps;
  updateUser: Function;
}>;

export type { HomeScreenProps, UserScreenProps };
