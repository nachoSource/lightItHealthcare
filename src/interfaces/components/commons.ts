import { PropsWithChildren, ReactNode } from "react";
import { NavigationProp } from "@react-navigation/core/src/types";
import { StyleProp, StyleSheet } from "react-native";

type BackButtonProps = PropsWithChildren<{
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}>;

type ButtonProps = PropsWithChildren<{
  children: ReactNode;
  style?: StyleProp<any>;
  onClick: Function;
}>;

type BottomDrawerProps = PropsWithChildren<{
  children: ReactNode;
  show: Boolean;
  setShow: Function;
}>;

type FieldProps = PropsWithChildren<{
  style?: StyleProp<any>;
  dark?: boolean;
  label?: string;
  numberOfLines?: number;
  value: String | Number | Date | Boolean;
  onChange?: Function;
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

type UserAvatarProps = PropsWithChildren<{
  avatar: String;
  imgHeight: String | Number;
  imgWidth: String | Number;
  style?: StyleSheet.NamedStyles<any>;
}>;

type UserFormProps = PropsWithChildren<{
  defaultValues?: any;
  onSubmit: Function;
}>;

export type {
  BackButtonProps,
  ButtonProps,
  BottomDrawerProps,
  FieldProps,
  LinkProps,
  TextProps,
  TouchableProps,
  UserAvatarProps,
  UserFormProps,
};
