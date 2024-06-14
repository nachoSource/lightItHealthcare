import React, { ReactElement } from "react";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import { BackButton, Text } from "../../components";
import UserDescription from "../../components/UserDescription";
import { UserScreenProps } from "../../interfaces/screens";
import { styles as globalStyles } from "../../styles/global.styles";
import BaseLayout from "../BaseLayout";
import styles from "./UserScreen.styles";

const UserScreen = ({
  user,
  error,
  navigation,
  pending,
}: UserScreenProps): ReactElement => (
  <BaseLayout>
    <BackButton navigation={navigation} />
    <View style={styles.container}>
      {pending && <ActivityIndicator />}
      {!!user && <UserDescription {...user} />}
      {(error || (!pending && !user)) && (
        <Text style={globalStyles.error}>
          Hubo un error al buscar la información del paciente.
        </Text>
      )}
    </View>
  </BaseLayout>
);

export default connect((state: any) => ({
  user: state.users.currentUser || null,
  error: state.users.error || null,
  pending: state.users.pending || false,
}))(UserScreen);
