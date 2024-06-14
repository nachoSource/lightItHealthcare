import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { UserComponentProps } from "../../interfaces/components/users";
import { selectUser } from "../../store/actions/users";
import Field from "../Field";
import styles from "./UserList.style";
import { getFormattedDate } from "../../helpers/commons";

const User = ({ dark = false, item, selectUser }: UserComponentProps) => {
  const navigation = useNavigation();
  const { id, avatar, createdAt, description, name, website } = item;
  const formattedDate = getFormattedDate(createdAt, false);

  const handlePress = () => {
    selectUser(item);
    navigation.navigate("User");
  };

  return (
    <TouchableOpacity key={id} onPress={handlePress}>
      <View
        style={[
          styles.element,
          dark ? styles.elementDark : styles.elementLight,
        ]}
      >
        <Field dark={dark} numberOfLines={1} label="Nombre:" value={name} />
        <Field
          dark={dark}
          numberOfLines={1}
          label="Descripción:"
          value={description}
        />
        <Field dark={dark} label="Fecha de creación:" value={formattedDate} />
      </View>
    </TouchableOpacity>
  );
};

export default connect(
  () => ({}),
  (dispatch) => ({
    selectUser: (data: any) => dispatch(selectUser()),
  })
)(User);
