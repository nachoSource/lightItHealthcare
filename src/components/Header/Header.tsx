import React from "react";
import { View } from "react-native";
import Text from "../Text";
import styles from "./Header.style";

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Pacientes en LightIt</Text>
  </View>
);

export default Header;
