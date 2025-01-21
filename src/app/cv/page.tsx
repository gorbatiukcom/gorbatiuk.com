"use client";
/* eslint-disable jsx-a11y/alt-text */

import {
  Document,
  Font,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

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
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: "#f2f4f5",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 16,
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

// const DEFAULT_WIDTH = 100;
const Resume = ({ style, size, ...rest }: any) => {
  // const [testWidth, setTestWidth] = useState(DEFAULT_WIDTH);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setTestWidth(window.innerWidth || DEFAULT_WIDTH);
  //     console.log("🚀 ~ useEffect ~ window.innerWidth:", window.innerWidth);
  //   }
  // }, []);
  return (
    <Page
      style={Array.isArray(style) ? [...style, styles.page] : [style, styles.page]}
      size={size}
      // size={{
      //   width: testWidth * 1.5,
      // }}
      {...rest}
    >
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
};

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
      <PDFViewer
        showToolbar={false}
        style={{
          // width: "100vw",
          width: "100%",
          height: "100svh",
          border: "none",
          // position: "absolute",
          // top: 0,
          // left: 0,

          // width: 100%,
          // height: 100%,
        }}
      >
        <PDFDoc />
      </PDFViewer>
      {/* <div>
        <PDFDownloadLink document={<PDFDoc />} fileName="cv_oleg_gorbatiuk.pdf">
          {({ blob, url, loading, error }: any) =>
            loading ? "Loading document..." : "Download now!"
          }{" "}
        </PDFDownloadLink>
      </div> */}
    </>
  );
}
