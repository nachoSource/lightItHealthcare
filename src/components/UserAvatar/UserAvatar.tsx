import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { DefaultUser } from "../../../assets";
import { checkValidUrl } from "../../helpers/commons";
import { UserAvatarProps } from "../../interfaces/components/commons";

// TODO clean this up
const UserAvatar = ({
  avatar,
  imgHeight,
  imgWidth,
  style,
}: UserAvatarProps): ReactElement => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isAvatarValid, setIsAvatarValid] = useState<Boolean>(false);

  // TODO make images visible for Android
  useEffect(() => {
    checkValidUrl(avatar).then((isValid) => {
      console.log("isValid", isValid);
      setIsAvatarValid(isValid);
    });
  }, [avatar]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      delay: 300,
      toValue: 100,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={style}>
      {!!avatar && isAvatarValid && (
        <Animated.Image
          source={{ uri: avatar }}
          style={{ width: imgWidth, height: imgHeight, opacity: fadeAnim }}
        />
      )}
      {(!avatar || !isAvatarValid) && <DefaultUser width={imgWidth} />}
    </View>
  );
};

export default UserAvatar;
