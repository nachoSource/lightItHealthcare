import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "../../interfaces/components/commons";
import styles from "./Button.style";

const Button = ({ children, style, onClick }: ButtonProps) => (
  <TouchableOpacity onPress={onClick} style={[styles.container, style]}>
    {children}
  </TouchableOpacity>
);

export default Button;
