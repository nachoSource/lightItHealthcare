import { PropsWithChildren } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { UserDescriptionProps } from "./components/users";

type HomeScreenProps = PropsWithChildren<{
  error: boolean;
  pending: boolean;
  users: UserDescriptionProps[];
  onMount: Function;
}>;

type UserScreenProps = PropsWithChildren<{
  error: Boolean;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  pending: Boolean;
  user: UserDescriptionProps;
}>;

export type { HomeScreenProps, UserScreenProps };
