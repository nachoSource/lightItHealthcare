import { PropsWithChildren, ReactNode } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { StyleSheet } from "react-native";
import { UserDescriptionProps } from "./users";

type BackButtonProps = PropsWithChildren<{
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}>;

type UserListProps = PropsWithChildren<{
  data: UserDescriptionProps[] | [];
  error: boolean;
  pending: boolean;
}>;

type LinkProps = PropsWithChildren<{
  url: String;
  label: String;
  style?: StyleSheet.NamedStyles<any>;
}>;

type TextProps = PropsWithChildren<{
  children: string | string[];
  style?: StyleSheet.NamedStyles<any>;
}>;

type TouchableProps = PropsWithChildren<{
  children?: ReactNode;
  label?: string;
  style?: StyleSheet.NamedStyles<any>;
  onTouch?: Function;
}>;

export type {
  BackButtonProps,
  UserListProps,
  LinkProps,
  TextProps,
  TouchableProps,
};
