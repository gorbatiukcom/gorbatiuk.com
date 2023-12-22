/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */

import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import Card from "./Card";
import Resume from "./reactive_resume.json";
import Title from "./Title";

const styles = StyleSheet.create({
  items: {
    width: "100%",
    gap: 16,
  },
  item: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
  },
  position: {
    fontSize: 12,
    fontFamily: "Instrument Sans 600",
  },
  company: {
    fontSize: 10,
    fontFamily: "Instrument Sans 600",
    color: "#848c94",
  },
  summary: {
    paddingTop: 4,
    fontSize: 10,
    fontFamily: "Instrument Sans 500",
    color: "#848c94",
  },
  logo: {
    minWidth: 36,
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#f2f4f5",
  },
});

const EducationItem = ({
  item,
}: {
  item: {
    id: string;
    visible: boolean;
    institution: string;
    location: string;
    logo: string;
    studyType: string;
    area: string;
    score: string;
    date: string;
    summary: string;
    url: {
      label: string;
      href: string;
    };
  };
}) => (
  <View style={styles.item}>
    <Image src={item.logo} style={styles.logo} />

    <View style={{ width: "100%" }}>
      <Text style={styles.position}>{item.institution}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
        <Text style={styles.company}>{`${item.studyType ? `${item.studyType}, ` : ""}${
          item.area
        }`}</Text>
        <Text style={styles.company}>{item.date}</Text>
      </View>
      <Text style={styles.company}>{item.location}</Text>
      <Text style={styles.summary}>{item.summary}</Text>
    </View>
  </View>
);

export const Education = () => (
  <Card>
    <Title>{Resume.sections.education.name}</Title>
    <View style={styles.items}>
      {Resume.sections.education.items.map((item) => {
        return <EducationItem key={item.id} item={item} />;
      })}
    </View>
  </Card>
);
