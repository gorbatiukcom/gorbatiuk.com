/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-array-index-key */

import { Image, Link as PDFLink, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import Card from "./Card";
import { AppStore, Earth } from "./icons/icons";
import Resume from "./reactive_resume.json";
import Title from "./Title";

const Link: any = PDFLink;

const styles = StyleSheet.create({
  items: {
    width: "100%",
  },
  item: {
    flexDirection: "row",
    gap: 12,
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
    color: "#434649",
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
    color: "#434649",
  },

  // Links
  links: {
    paddingTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  link: {
    textDecoration: "none",
    fontFamily: "Instrument Sans 600",
    fontSize: 10,
    color: "#434649",
    backgroundColor: "#f2f4f5",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 3,
    flexDirection: "row",
    gap: 4,
  },
  linkIcon: {
    width: 12,
    height: 12,
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
      <View style={{ height: "100%", width: 4 }}>
        <View style={styles.achievementDot}></View>
      </View>
      <Text style={styles.achievementText}>{achievement}</Text>
    </View>
  );
};
const ExperienceItem = ({
  item,
  index,
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
    urlWebApp?: {
      label: string;
      href: string;
    };
    urlWebApp2?: {
      label: string;
      href: string;
    };
    urlMobileApp?: {
      label: string;
      href: string;
    };
  };
  index: number;
}) => (
  <View style={[styles.item, { paddingTop: index === 0 ? 0 : 16 }]}>
    <View style={{ height: "100%", width: "36px" }}>
      <Image src={item.logo} style={styles.logo} />
    </View>

    <View style={{ width: "100%" }}>
      <Text style={styles.position}>{item.position}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: 1,
        }}
      >
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
      {item.urlWebApp || item.urlWebApp2 || item.urlMobileApp ? (
        <View style={styles.links}>
          {item.urlWebApp ? (
            <Link href={item.urlWebApp.href} style={styles.link}>
              <Earth style={styles.linkIcon} />
              <Text>{item.urlWebApp.label}</Text>
            </Link>
          ) : null}
          {item.urlWebApp2 ? (
            <Link href={item.urlWebApp2.href} style={styles.link}>
              <Earth style={styles.linkIcon} />
              <Text>{item.urlWebApp2.label}</Text>
            </Link>
          ) : null}
          {item.urlMobileApp ? (
            <Link href={item.urlMobileApp.href} style={styles.link}>
              <AppStore style={styles.linkIcon} />
              <Text>{item.urlMobileApp.label}</Text>
            </Link>
          ) : null}
        </View>
      ) : null}

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

export const Experience = () => (
  <Card>
    <Title>{Resume.sections.experience.name}</Title>
    <View style={styles.items}>
      {Resume.sections.experience.items.map((item, index) => {
        return <ExperienceItem key={item.id} item={item} index={index} />;
      })}
    </View>
  </Card>
);
