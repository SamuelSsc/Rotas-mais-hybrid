import { VBox } from "@components";
import { SignUpForm } from "@components/auth";
import React from "react";

export default function SignUpScreen() {
  return (
    <VBox vGrow vAlign="center" hAlign="center">
      <SignUpForm />
    </VBox>
  );
}
