import React from "react";
import { Text, TextInput, View } from "react-native";
import { FieldProps } from "../../interfaces/components/commons";
import styles from "./Field.style";

const Field = ({
  dark = false,
  label = "",
  numberOfLines = 2,
  value,
  style = {},
  onChange,
}: FieldProps) => (
  <View style={[styles.field, style]}>
    {!!label && (
      <Text style={[styles.text, dark ? styles.textDark : styles.textLight]}>
        {label}
      </Text>
    )}
    <View style={styles.textContainer}>
      {!!onChange && (
        <TextInput
          numberOfLines={numberOfLines}
          style={[styles.text, styles.textInput]}
          value={value ? String(value) : ""}
          onChangeText={onChange}
        />
      )}
      {!onChange && (
        <Text
          ellipsizeMode="tail"
          numberOfLines={numberOfLines}
          style={[styles.text, dark ? styles.textDark : styles.textLight]}
        >
          {value?.toString()}
        </Text>
      )}
    </View>
  </View>
);

export default Field;
