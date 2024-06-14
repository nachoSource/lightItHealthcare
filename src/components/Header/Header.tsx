import React from "react";
import { View } from "react-native";
import Text from "../Text";
import styles from "./Header.style";

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Sistema de gestión de pacientes</Text>
  </View>
);

export default Header;
