import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.white,
    borderRadius: 100,
    marginVertical: 8,
    overflow: "hidden",
    padding: 5,
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginTop: 10,
  },
  buttonText: { color: colors.white, fontWeight: "bold" },
  container: {
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: colors.black,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  error: {
    color: colors.error,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  field: { marginVertical: 2 },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default styles;
