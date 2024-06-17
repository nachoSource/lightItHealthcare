import React, { ReactElement, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import {
  BackButton,
  BottomDrawer,
  Text,
  UserDescription,
  UserForm,
} from "../../components";
import { UserScreenProps } from "../../interfaces/screens";
import { updateUser } from "../../store/actions/users";
import { styles as globalStyles } from "../../styles/global.styles";
import BaseLayout from "../BaseLayout";
import styles from "./UserScreen.styles";

const UserScreen = ({
  user,
  error,
  navigation,
  pending,
  updateUser,
}: UserScreenProps): ReactElement => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleSubmit = (data) => {
    setShowDrawer(false);
    updateUser(data);
    navigation.navigate("Home");
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  return (
    <BaseLayout>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        {pending && <ActivityIndicator />}
        {!!user && <UserDescription {...user} openDrawer={openDrawer} />}

        <BottomDrawer show={showDrawer} setShow={setShowDrawer}>
          <UserForm defaultValues={user} onSubmit={handleSubmit} />
        </BottomDrawer>

        {(error || (!pending && !user)) && (
          <Text style={globalStyles.error}>
            Hubo un error al buscar la información del paciente.
          </Text>
        )}
      </View>
    </BaseLayout>
  );
};

export default connect(
  (state: any) => ({
    user: state.users.currentUser || null,
    error: state.users.error || null,
    pending: state.users.pending || false,
  }),
  (dispatch) => {
    return {
      updateUser: (data) => dispatch(updateUser(data)),
    };
  }
)(UserScreen);
