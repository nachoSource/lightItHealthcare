import React, { ReactElement, useEffect, useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Add } from "../../../assets";
import {
  Button,
  BottomDrawer,
  Header,
  UserForm,
  UserList,
} from "../../components";
import { HomeScreenProps } from "../../interfaces/screens";
import { createUser, fetchUsersRequest } from "../../store/actions/users";
import BaseLayout from "../BaseLayout";
import styles from "./HomeScreen.styles";

const HomeScreen = ({
  error,
  users,
  pending,
  createUser,
  onMount,
}: HomeScreenProps): ReactElement => {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    onMount();
  }, [onMount]);

  const handleSubmit = (data) => {
    setShowDrawer(false);
    createUser(data);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <BaseLayout>
      <View>
        <Header />
        <UserList data={users} error={error} pending={pending} />
        {!pending && (
          <Button onClick={openDrawer} style={styles.addButton}>
            <Add />
          </Button>
        )}
        <BottomDrawer show={showDrawer} setShow={setShowDrawer}>
          <UserForm onSubmit={handleSubmit} />
        </BottomDrawer>
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
      createUser: (data) => dispatch(createUser(data)),
      onMount: () => dispatch(fetchUsersRequest()),
    };
  }
)(HomeScreen);
