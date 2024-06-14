import React, { ReactElement, useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Header, UserList } from "../../components";
import { HomeScreenProps } from "../../interfaces/screens";
import { fetchUsersRequest } from "../../store/actions/users";
import BaseLayout from "../BaseLayout";

const HomeScreen = ({
  error,
  users,
  pending,
  onMount,
}: HomeScreenProps): ReactElement => {
  useEffect(() => {
    onMount();
  }, [onMount]);

  return (
    <BaseLayout>
      <View>
        <Header />
        <UserList data={users} error={error} pending={pending} />
      </View>
    </BaseLayout>
  );
};

export default connect(
  (state: any) => ({
    users: state.users.data,
    error: state.users.error,
    pending: state.users.pending,
  }),
  (dispatch) => {
    return {
      onMount: () => dispatch(fetchUsersRequest()),
    };
  }
)(HomeScreen);
