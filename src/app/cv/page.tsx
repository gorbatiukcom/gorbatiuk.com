"use client";
/* eslint-disable jsx-a11y/alt-text */

import { Button, Flex } from "@chakra-ui/react";
import {
  Document,
  Font,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
  View,
} from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import React from "react";

import { Education } from "./Education";
import { Experience } from "./Experience";
import { Info } from "./Info";
import { Projects } from "./Projects";
import Skills from "./Skills";
import { Summary } from "./Summary";

// BG #f2f4f5
// FG #fefefe
// text secondary #505a63
const styles = StyleSheet.create({
  page: {
    padding: 16,
    backgroundColor: "#f2f4f5",
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: "column",
    width: 290,
    paddingRight: 16,
    gap: 16,
  },
  rightColumn: {
    flexDirection: "column",
    width: "100%",
    gap: 16,
  },
});

Font.register({
  family: "Instrument Sans",
  src: `https://gorbatiuk.com/fonts/InstrumentSans-Regular.ttf`,
});

Font.register({
  family: "Instrument Sans 500",
  src: `https://gorbatiuk.com/fonts/InstrumentSans-Medium.ttf`,
});

Font.register({
  family: "Instrument Sans 600",
  src: `https://gorbatiuk.com/fonts/InstrumentSans-SemiBold.ttf`,
});

Font.register({
  family: "Instrument Sans 700",
  src: `https://gorbatiuk.com/fonts/InstrumentSans-Bold.ttf`,
});

const Resume = ({ style, ...rest }: any) => (
  <Page style={Array.isArray(style) ? [...style, styles.page] : [style, styles.page]} {...rest}>
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Info />
        <Skills />
      </View>
      <View style={styles.rightColumn}>
        <Summary />
        <Experience />
        <Projects />
        <Education />
      </View>
    </View>
  </Page>
);

// Create Document Component
const PDFDoc = () => (
  <Document
    author="Luke Skywalker"
    keywords="awesome, resume, start wars"
    subject="The resume of Luke Skywalker"
    title="Resume"
  >
    <Resume size="A4" />
  </Document>
);

export default function Home() {
  return (
    <>
      <PDFViewer showToolbar={false} style={{ width: "100vw", height: "100dvh", border: "none" }}>
        <PDFDoc />
      </PDFViewer>
      <Flex position="fixed" zIndex={100} right="20px" bottom="20px">
        <PDFDownloadLink document={<PDFDoc />} fileName="cv_oleg_gorbatiuk.pdf">
          {({ loading }: any) => {
            return (
              <Button bg="black" color="white" _hover={{ bg: "black" }}>
                {loading ? "Loading document..." : "Download CV"}
              </Button>
            );
          }}
        </PDFDownloadLink>
      </Flex>
    </>
  );
}
