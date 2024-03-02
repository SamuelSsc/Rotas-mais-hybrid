import React from "react";
import { Stack } from "expo-router";

export default function UnitDetailLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="comment"
        options={{ title: "Comentários", presentation: "modal" }}
      />
    </Stack>
  );
}
