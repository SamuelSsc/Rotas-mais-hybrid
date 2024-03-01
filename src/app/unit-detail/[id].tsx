import React from "react";

import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { UnitInfo } from "@components/unit-detail";

export default function UnitDetailScreen() {
  const { id } = useLocalSearchParams();
  console.log(id);
  //   PEGAR OS OUTROS DADOS DA LISTAGEM POR PARAMS

  return <UnitInfo />;
}
