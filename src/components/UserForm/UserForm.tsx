import React, { ReactElement, useState } from "react";
import { Keyboard, Pressable, TouchableOpacity, View } from "react-native";
import { UserFormProps } from "../../interfaces/components/commons";
import UserAvatar from "../UserAvatar";
import Field from "../Field";
import Text from "../Text";
import styles from "./UserForm.style";
import { isLoaded, makeId } from "../../helpers/commons";

const UserForm = ({ defaultValues, onSubmit }: UserFormProps): ReactElement => {
  const [values, setValues] = useState({ ...defaultValues });
  const [error, setError] = useState("");

  const handleChange = (field: String, value: String) => {
    setValues({ ...values, [field]: value });
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    const formError = validateForm();
    if (!formError) {
      onSubmit({
        ...values,
        id: !defaultValues ? makeId() : values.id,
        createdAt: !defaultValues ? new Date() : values.createdAt,
      });
    } else {
      setError(formError);
    }
  };

  const validateForm = () => {
    console.log("values", values);
    if (isLoaded(values)) {
      return "";
    } else {
      return "Complete todos los campos.";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {defaultValues ? "Editar paciente" : "Crear paciente"}
      </Text>
      {defaultValues?.id && (
        <Field label="id:" value={values.id} style={styles.field} />
      )}
      <Field
        label="Nombre:"
        value={values.name}
        style={styles.field}
        onChange={(v) => handleChange("name", v)}
      />
      <Field
        label="Descripción:"
        value={values.description}
        numberOfLines={5}
        style={styles.field}
        onChange={(v) => handleChange("description", v)}
      />
      <Field
        label="Sitio del paciente:"
        value={values.website}
        style={styles.field}
        onChange={(v) => handleChange("website", v)}
      />
      <Field
        label="Url del Avatar:"
        value={values.avatar}
        style={styles.field}
        onChange={(v) => handleChange("avatar", v)}
      />
      <UserAvatar
        avatar={values.avatar}
        imgHeight={75}
        imgWidth={75}
        style={styles.avatar}
      />
      <Field
        label="Fecha de creación:"
        numberOfLines={1}
        value={values.createdAt || new Date()}
        style={styles.field}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Listo</Text>
      </Pressable>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default UserForm;
