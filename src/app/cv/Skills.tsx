/* eslint-disable react/no-array-index-key */

import { Link as PDFLink, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import Card from "./Card";
import { ChromeIcon, GitHubLogo } from "./icons/icons";
import Resume from "./reactive_resume.json";
import Title from "./Title";

const Link: any = PDFLink;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 10,
    fontFamily: "Instrument Sans 700",
    color: "#505a63",
    marginTop: 8,
    marginBottom: 4,
  },

  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },

  skill: {
    fontFamily: "Instrument Sans 500",
    fontSize: 10,
    color: "#0065f3",
    backgroundColor: "#e6f0fd",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  // lang
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  language: {
    fontSize: 10,
    fontFamily: "Instrument Sans 700",
    color: "#3b434b",
    marginTop: 4,
    marginBottom: 4,
  },
  languageLevel: {
    fontSize: 10,
    fontFamily: "Instrument Sans 700",
    color: "#848c94",
  },

  link: {
    textDecoration: "none",
    fontFamily: "Instrument Sans 600",
    fontSize: 10,
    color: "#434649",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  linkIcon: {
    width: 14,
    height: 14,
  },
});

const SkillEntry = ({
  name,
  skills,
}: {
  name: string;
  skills: {
    name: string;
    columns: number;
    visible: boolean;
    id: string;
    items: {
      id: string;
      visible: boolean;
      name: string;
      description: string;
      level: number;
      keywords: string[];
    }[];
  };
}) => (
  <View style={styles.skills}>
    {skills.items.map(({ id, name, keywords }) => (
      <Text key={id} style={styles.skill}>
        {name}
      </Text>
    ))}
  </View>
);

const Skills = () => (
  <>
    <Card>
      <Title style={{ marginBottom: 0 }}>Main Stack</Title>
      <Text style={styles.subtitle}>Front-end</Text>
      <SkillEntry name="Combat Abilities" skills={Resume.sections.skillsFront} />
      <Text style={styles.subtitle}>Mobile</Text>
      <SkillEntry name="Combat Abilities" skills={Resume.sections.skillsMobile} />
      <Text style={styles.subtitle}>Back-end</Text>
      <SkillEntry name="Combat Abilities" skills={Resume.sections.skillsBack} />
    </Card>
    <Card>
      <Title>Skills</Title>
      <SkillEntry name="Combat Abilities" skills={Resume.sections.skills} />
    </Card>
    <Card>
      <Title>Languages</Title>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>English </Text>
        <Text style={styles.languageLevel}>{` — Professional working`}</Text>
      </View>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>Polish </Text>
        <Text style={styles.languageLevel}>{` — Professional working`}</Text>
      </View>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>Ukrainian </Text>
        <Text style={styles.languageLevel}>{` — Native Speaker`}</Text>
      </View>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>Russian </Text>
        <Text style={styles.languageLevel}>{` — Native Speaker`}</Text>
      </View>
    </Card>
    <View style={{ width: "100%", height: 16 }}></View>
    <View style={{ gap: 4 }}>
      <Link href={Resume.basics.webUrl} style={styles.link}>
        <ChromeIcon style={styles.linkIcon} />
        <Text>Latest Version Online</Text>
      </Link>
      <Link href={Resume.basics.githubUrl} style={styles.link}>
        <GitHubLogo style={styles.linkIcon} />
        <Text>View Source Code on GitHub</Text>
      </Link>
    </View>
  </>
);

export default Skills;
