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
      {`Full Stack Developer with a front-end focus and over 6 years of commercial experience.

        My most recent role in a web3 company involved creating a mobile crypto wallet and contributing to various React.js applications.

        In addition to my professional activities, this year I have been involved in personal projects in the food-tech field.

        Before that I worked in a travel-tech startup for 4 years where I grew from Junior Frontend Developer to Fullstack Developer. 
        My responsibilities included developing and launching a mobile app (React Native), leading web application development (React, Vue), and assisting with backend development (Node.js).
        My experience also includes direct collaboration with CEO and stakeholders to align development with business goals, leveraging user feedback and 
        analytics for product enhancement.`}
    </Text>
  </Card>
);
