import React, { ReactElement, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { getFormattedDate } from "../../helpers/commons";
import { UserDescriptionProps } from "../../interfaces/components/users";
import Button from "../Button";
import Field from "../Field";
import Link from "../Link";
import Text from "../Text";
import UserAvatar from "../UserAvatar";
import styles from "./UserDescription.styles";

const UserDescription = ({
  avatar,
  createdAt,
  description,
  name,
  website,
  openDrawer,
}: UserDescriptionProps): ReactElement => {
  const [formattedDate, setFormattedDate] = useState<String>("null");

  useEffect(() => {
    console.log("UserDescription ", createdAt);
    setFormattedDate(getFormattedDate(createdAt));
  }, [createdAt]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserAvatar avatar={avatar} imgHeight={200} imgWidth="100%" />
        <Field dark numberOfLines={3} value={name} style={styles.userName} />
      </View>
      <View style={styles.content}>
        <ScrollView>
          <Field
            dark
            label="Descripción:"
            numberOfLines={5}
            value={description}
            style={styles.longField}
          />
          <Field dark label="Fecha de creación:" value={formattedDate} />
          <Link label="Sitio" url={website} style={styles.link} />
        </ScrollView>
        <Button onClick={openDrawer} style={styles.editButton}>
          <Text style={styles.editButtonText}>
            Editar información del paciente
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default UserDescription;
