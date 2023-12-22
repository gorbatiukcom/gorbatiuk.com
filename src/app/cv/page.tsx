"use client";

import { Button, Flex, Heading } from "@chakra-ui/react";
import ReactPDF, { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
/* eslint-disable jsx-a11y/alt-text */
import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import { Education } from "./Education";
import { Experience } from "./Experience";
import { Info } from "./Info";
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
    // paddingTop: 16,
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
  footer: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    textAlign: "center",
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: "gray",
    borderStyle: "dashed",
    "@media orientation: landscape": {
      marginTop: 10,
    },
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

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

export const Resume = ({ style, ...rest }: any) => (
  <Page style={Array.isArray(style) ? [...style, styles.page] : [style, styles.page]} {...rest}>
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Info />
        <Skills />
      </View>
      <View style={styles.rightColumn}>
        <Summary />

        <Experience />
        <Education />
      </View>
    </View>
    {/* <Text style={styles.footer}>This IS the candidate you are looking for</Text> */}
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
    {/* <Resume orientation="landscape" size="A4" />
    <Resume size={[380, 1250]} /> */}
  </Document>
);

export default function Home() {
  return (
    <>
      <PDFViewer showToolbar={false} style={{ width: "100vw", height: "100vh", border: "none" }}>
        <PDFDoc />
      </PDFViewer>
      <Flex position="fixed" zIndex={100} right="20px" bottom="20px">
        <PDFDownloadLink document={<PDFDoc />} fileName="cv_oleg_gorbatiuk.pdf">
          {({ blob, url, loading, error }) => {
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
