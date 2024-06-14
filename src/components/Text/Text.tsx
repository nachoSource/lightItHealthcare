import React, { ReactElement } from "react";
import { Text as RNText } from "react-native";
import { TextProps } from "../../interfaces/components/commons";
import styles from "./Text.styles";

const Text = ({ children, style }: TextProps): ReactElement => (
  <RNText style={{ ...styles.text, ...style }}>{children}</RNText>
);

export default Text;
