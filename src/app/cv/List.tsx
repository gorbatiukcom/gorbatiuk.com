import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Lato",
  },
});

const List = ({ children }: any) => children;

export const Item = ({ children }: any) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;