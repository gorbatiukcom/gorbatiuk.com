import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import Card from "./Card";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: "Instrument Sans 700",
    marginBottom: 4,
  },
  summary: {
    fontSize: 10,
    fontFamily: "Instrument Sans 500",
  },
});

export const Summary = () => (
  <Card style={styles.container}>
    <Text style={styles.title}>Product Developer | React, React Native</Text>
    <Text style={styles.summary}>
      {`Full Stack Developer (front-end focus) with over 5 years of commercial experience.`}
    </Text>
  </Card>
);
