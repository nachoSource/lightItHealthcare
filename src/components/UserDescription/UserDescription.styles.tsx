import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "75%",
  },
  defaultUser: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingBottom: 5,
    width: "100%",
  },
  img: { width: "100%", height: 200 },
  link: { marginTop: 15 },
  longField: { flexDirection: "column", marginTop: 5, marginBottom: 10 },
  userName: { marginTop: 5 },
});

export default styles;
