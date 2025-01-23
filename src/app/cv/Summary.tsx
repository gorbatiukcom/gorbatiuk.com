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
    color: "#434649",
  },
});

export const Summary = () => (
  <Card style={styles.container}>
    <Text style={styles.title}>Product Developer | React, React Native</Text>
    <Text style={styles.summary}>
      {`Full Stack Developer with 6+ years of experience in web and mobile development, specializing in React, React Native, and blockchain technologies. 
      
Skilled in building modern applications that seamlessly integrate user needs with business goals, ensuring impactful solutions through a strong focus on UX and close collaboration with stakeholders.`}
    </Text>
  </Card>
);
