import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  title: {
    color: colors.black,
    fontSize: 17,
    fontWeight: "600",
  },
});

export default styles;
