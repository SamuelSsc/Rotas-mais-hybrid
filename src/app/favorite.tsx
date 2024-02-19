import React from "react";

import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import {
  Body,
  BodySecondary,
  Caption,
  H1,
  H2,
  H3,
  H4,
  HDisplay,
  InputLabel,
  InputPlaceholder,
} from "@components";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <HDisplay style={styles.title}>Modal</HDisplay>
      <H1>H1 Text</H1>
      <H2>H2 Text</H2>
      <H3>H3 Text</H3>
      <H4>H4 Text</H4>
      <Body>Body Text</Body>
      <BodySecondary>BodySecondary Text</BodySecondary>
      <Caption>Caption Text</Caption>
      <InputLabel>Input Label Text</InputLabel>
      <InputPlaceholder>Input Placeholder Text</InputPlaceholder>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
