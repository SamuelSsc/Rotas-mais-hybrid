import React from "react";

import { useLocalSearchParams } from "expo-router";
import { AssessmentInfo, UnitInfo } from "@components/unit-detail";
import { Root, Scroll, VSeparator } from "@components";

export default function UnitDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Root>
      <Scroll>
        <UnitInfo />
        <AssessmentInfo />
      </Scroll>
    </Root>
  );
}
