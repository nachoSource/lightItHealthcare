import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Animated, ScrollView, View } from "react-native";
import { DefaultUser } from "../../../assets";
import { checkValidUrl, getFormattedDate } from "../../helpers/commons";
import { UserDescriptionProps } from "../../interfaces/components/users";
import Field from "../Field";
import Link from "../Link";
import styles from "./UserDescription.styles";

const UserDescription = ({
  avatar,
  createdAt,
  description,
  name,
  website,
}: UserDescriptionProps): ReactElement => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isAvatarValid, setIsAvatarValid] = useState<Boolean>(false);
  const formattedDate = getFormattedDate(createdAt);

  useEffect(() => {
    checkValidUrl(avatar).then((isValid) => setIsAvatarValid(isValid));
  }, [createdAt]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      delay: 300,
      toValue: 100,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <View style={styles.header}>
        {!!avatar && isAvatarValid && (
          <Animated.Image
            source={{ uri: avatar }}
            style={{ ...styles.img, opacity: fadeAnim }}
          />
        )}
        {(!avatar || !isAvatarValid) && (
          <View style={styles.defaultUser}>
            <DefaultUser />
          </View>
        )}
        <Field
          dark
          numberOfLines={3}
          value={name}
          containerStyle={styles.userName}
        />
      </View>
      <View style={styles.content}>
        <ScrollView>
          <Field
            dark
            label="Descripción:"
            numberOfLines={5}
            value={description}
            containerStyle={styles.longField}
          />
          <Field dark label="Fecha de creación:" value={formattedDate} />
          <Link label="Sitio:" url={website} style={styles.link} />
        </ScrollView>
      </View>
    </>
  );
};

export default UserDescription;
