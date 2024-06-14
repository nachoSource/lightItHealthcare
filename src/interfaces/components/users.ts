import { PropsWithChildren } from "react";
import { StyleProp } from "react-native";

type UserComponentProps = PropsWithChildren<{
  dark?: boolean;
  item: UserDescriptionProps;
  selectUser: Function;
}>;

type UserDescriptionProps = PropsWithChildren<{
  avatar: String;
  createdAt: Date;
  description: String;
  id: String;
  name: String;
  website: String;
}>;

type FieldProps = PropsWithChildren<{
  containerStyle?: StyleProp<any>;
  dark?: boolean;
  label?: string;
  numberOfLines?: number;
  value: String | Number | Date | Boolean;
}>;

export type { UserComponentProps, UserDescriptionProps, FieldProps };
