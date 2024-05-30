import { H3, HBox, VBox, VSeparator } from "@components";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";

import { Pressable } from "react-native";
import { Divider } from "react-native-paper";

export default function AboutScreen() {
  return (
    <VBox>
      <VSeparator />
      <Pressable onPress={() => router.navigate("/assessibility")}>
        <HBox>
          <HBox.Item>
            <H3>Assessibilidade</H3>
          </HBox.Item>
          <HBox.Item wrap>
            <FontAwesome
              name="chevron-right"
              color={"black"}
              size={16}
              style={{ marginLeft: 4 }}
            />
          </HBox.Item>
        </HBox>
      </Pressable>

      <VSeparator />
      <Divider />
      <VSeparator />

      <Pressable onPress={() => router.navigate("/faq")}>
        <HBox>
          <HBox.Item>
            <H3>Perguntas Frequentes</H3>
          </HBox.Item>
          <HBox.Item wrap>
            <FontAwesome
              name="chevron-right"
              color={"black"}
              size={16}
              style={{ marginLeft: 4 }}
            />
          </HBox.Item>
        </HBox>
      </Pressable>

      <VSeparator />
      <Divider />
      <VSeparator />

      <Pressable onPress={() => router.navigate("/contact-us")}>
        <HBox>
          <HBox.Item>
            <H3>Fale conosco</H3>
          </HBox.Item>
          <HBox.Item wrap>
            <FontAwesome
              name="chevron-right"
              color={"black"}
              size={16}
              style={{ marginLeft: 4 }}
            />
          </HBox.Item>
        </HBox>
      </Pressable>
    </VBox>
  );
}
