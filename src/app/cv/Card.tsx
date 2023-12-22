import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "#fefefe",
    padding: 12,
    borderRadius: 8,
  },
});

export const Card = ({ style, children, ...rest }: any) => (
  <View style={Array.isArray(style) ? [...style, styles.card] : [style, styles.card]} {...rest}>
    {children}
  </View>
);

export default Card;
