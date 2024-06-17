import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  field: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    overflow: "hidden",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    flexWrap: "nowrap",
  },
  textContainer: { maxWidth: "80%" },
  textInput: {
    height: 30,
    margin: 2,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 17,
    backgroundColor: colors.white,
    borderRadius: 5,
    color: colors.black,
    width: Number((Dimensions.get("window").width * 50) / 100),
  },
  textDark: { color: colors.black },
  textLight: { color: colors.white },
});

export default styles;
