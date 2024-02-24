import { H1, VBox } from "@components";
import { SignUpForm } from "@components/auth";
import { Link } from "expo-router";
import React from "react";

export default function HomeScreen() {
  return (
    <VBox vGrow vAlign="center" hAlign="center">
      <H1>Inicio</H1>
      <Link href={"/(tabs)"}>Vai</Link>
      <SignUpForm />
    </VBox>
  );
}
