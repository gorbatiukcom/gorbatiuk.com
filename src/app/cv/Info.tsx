import { Link as PDFLink, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import Card from "./Card";
import { Email, GitHub, LinkedIn, Location, Phone } from "./icons/icons";
import Resume from "./reactive_resume.json";

const Link: any = PDFLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 6,
    // alignItems: "center",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
    textTransform: "uppercase",
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  name: {
    fontSize: 16,
    fontFamily: "Instrument Sans 700",
    paddingBottom: 6,
  },
  subtitle: {
    fontSize: 10,
    fontFamily: "Instrument Sans 500",
  },
  link: {
    fontSize: 10,
    fontFamily: "Instrument Sans 500",
    color: "black",
    textDecoration: "none",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  card: {
    backgroundColor: "#000",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
  },
  testText: {
    fontSize: 16,
    // lineHeight: 1,
    fontFamily: "Instrument Sans 600",
  },

  icon: {
    width: 12,
    height: 12,
  },
});

export const Info = () => (
  <Card style={styles.container}>
    <Text style={styles.name}>{Resume.basics.name}</Text>
    <View style={styles.link}>
      <Location style={styles.icon} />
      <Text style={styles.subtitle}>{Resume.basics.location}</Text>
    </View>
    <Link href={`mailto:${Resume.basics.email}`} style={styles.link}>
      <Email style={styles.icon} />
      <Text style={styles.subtitle}>{Resume.basics.email}</Text>
    </Link>
    {/* <Link href={Resume.basics.phone.href} style={styles.link}>
      <Phone style={styles.icon} />
      <Text style={styles.subtitle}>{Resume.basics.phone.label}</Text>
    </Link> */}
    <Link href={Resume.basics.linkedin.href} target="_blank" style={styles.link}>
      <LinkedIn style={styles.icon} />
      <Text style={styles.subtitle}>{Resume.basics.linkedin.label}</Text>
    </Link>
    <Link href={Resume.basics.github.href} target="_blank" style={styles.link}>
      <GitHub style={styles.icon} />
      <Text style={styles.subtitle}>{Resume.basics.github.label}</Text>
    </Link>
    {/* <Text style={styles.subtitle}>Lodz, Poland</Text>
    <Text style={styles.subtitle}>gorbatiuk.ol@gmail.com</Text>
    <Text style={styles.subtitle}>+48 578 201 846</Text>
    <Text style={styles.subtitle}>LinkedIn</Text> */}
    {/* <Text style={styles.subtitle}>Lodz gorbatiuk.com LinkedIn</Text> */}
    {/* <View style={styles.card}>
      <Text style={styles.testText}>Oleg Gorbatiuk</Text>
    </View> */}

    {/* <View style={styles.detailColumn}>
      <Text style={styles.name}>Luke Skywalker</Text>
      <Text style={styles.subtitle}>Jedi Master</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href="mailto:luke@theforce.com" style={styles.link}>
        luke@theforce.com
      </Link>
    </View> */}
  </Card>
);
