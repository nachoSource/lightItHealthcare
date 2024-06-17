import { PropsWithChildren } from "react";

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
  openDrawer: Function;
}>;

type UserListProps = PropsWithChildren<{
  data: UserDescriptionProps[] | [];
  error: boolean;
  pending: boolean;
}>;

export type { UserComponentProps, UserDescriptionProps, UserListProps };
