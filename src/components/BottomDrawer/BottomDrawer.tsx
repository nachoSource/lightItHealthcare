import React from "react";
import { Dimensions, Modal, View } from "react-native";
import { BottomDrawerProps } from "../../interfaces/components/commons";
import styles from "./BottomDrawer.style";

// TODO add gesture handler to close this
const BottomDrawer = ({ children, show, setShow }: BottomDrawerProps) => {
  const windowHeight = Dimensions.get("window").height;

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={show}
      onRequestClose={handleClose}
    >
      <View style={[styles.bottomSheet, { height: windowHeight * 0.7 }]}>
        {children}
      </View>
    </Modal>
  );
};

// credits: https://medium.com/geekculture/how-to-make-a-bottom-drawer-in-a-react-native-app-e4e4d5f81ab0
export default BottomDrawer;
