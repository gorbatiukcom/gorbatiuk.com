import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Instrument Sans 700",
    fontSize: 12,
    marginBottom: 8,
    letterSpacing: 0.8,
    // color: "#505a63",
  },
});

const Title = ({ children, style, ...rest }: any) => (
  <Text style={Array.isArray(style) ? [styles.title, ...style] : [styles.title, style]} {...rest}>
    {children}
  </Text>
);

export default Title;
