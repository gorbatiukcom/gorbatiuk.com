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

  // Achievement
  achievementItem: {
    flexDirection: "row",
    // alignItems: "center",
    gap: 8,
    paddingRight: 16,
  },
  achievementDot: {
    marginTop: 4,
    width: 4,
    minWidth: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: "#0065f3",
  },
  achievementText: {
    fontSize: 10,
    fontFamily: "Instrument Sans 500",
    color: "#848c94",
  },

  // Tags
  tags: {
    paddingTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  tag: {
    fontFamily: "Instrument Sans 500",
    fontSize: 10,
    color: "#0065f3",
    backgroundColor: "#e6f0fd",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});

const Achievement = ({ achievement }: { achievement: string }) => {
  return (
    <View style={styles.achievementItem}>
      <View style={styles.achievementDot}></View>
      <Text style={styles.achievementText}>{achievement}</Text>
    </View>
  );
};
const ExperienceItem = ({
  item,
}: {
  item: {
    id: string;
    visible: boolean;
    company: string;
    logo: string;
    position: string;
    location: string;
    date: string;
    summary: string;
    achievements: string[];
    tags: string[];
    url: {
      label: string;
      href: string;
    };
  };
}) => (
  <View style={styles.item}>
    <Image src={item.logo} style={styles.logo} />

    <View style={{ width: "100%" }}>
      <Text style={styles.position}>{item.position}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
        <Text style={styles.company}>{item.company}</Text>
        <Text style={styles.company}>{item.date}</Text>
      </View>
      <Text style={styles.company}>{item.location}</Text>
      <Text style={styles.summary}>{item.summary}</Text>
      <View style={{ width: "100%", gap: 4, paddingTop: 4 }}>
        {item.achievements.map((achievement) => (
          <Achievement key={achievement} achievement={achievement} />
        ))}
      </View>
      <View style={styles.tags}>
        {item.tags.map((tag) => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>
    </View>
  </View>
);

// "Mobile app: <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://apps.apple.com/app/localie-tours-by-locals/id1576562977\">https://apps.apple.com/app/localie-tours-by-locals/id1576562977</a> </p><p>Web app: https://localie.co/en</p>"

export const Experience = () => (
  <Card>
    <Title>{Resume.sections.experience.name}</Title>
    <View style={styles.items}>
      {Resume.sections.experience.items.map((item) => {
        return <ExperienceItem key={item.id} item={item} />;
      })}
    </View>
  </Card>
);
