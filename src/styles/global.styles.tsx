import { StyleSheet } from "react-native";

const colors = {
  black: "#1d212f",
  error: "red",
  link: "#7345fc",
  primary: "#d8ee17",
  secondary: "#7345fc",
  white: "#f8f9fa",
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%",
  },
  container: {
    padding: 25,
  },
  error: { padding: 15, color: colors.error },
});

export { styles, colors };
