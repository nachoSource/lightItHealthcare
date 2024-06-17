import { StyleSheet } from "react-native";
import { colors } from "../../styles/global.styles";

const styles = StyleSheet.create({
  container: { width: "100%", display: "flex", maxHeight: "70%" },
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
  editButton: { paddingHorizontal: 10, paddingVertical: 5 },
  editButtonText: { color: colors.black },
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
  longField: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
  },
  userName: { marginTop: 5 },
});

export default styles;
