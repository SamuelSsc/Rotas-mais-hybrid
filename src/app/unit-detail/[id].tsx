import {
  Body,
  BodySecondary,
  H1,
  H3,
  H4,
  HBox,
  VBox,
  VSeparator,
} from "@components";
import React from "react";
import Mock_Image from "@assets/images/img_ubs_mock.jpg";

import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function UnitDetailScreen() {
  const screen = Dimensions.get("window");
  const width = screen.width;

  return (
    <VBox>
      <VSeparator />
      {/* Bold aqui em baixo */}
      <H1>Nome da Unidade 123...</H1>
      <Image
        source={Mock_Image}
        resizeMode="contain"
        style={{ maxWidth: width * 0.9, height: 300 }}
      />
      <H3>Lotação:</H3>
      <Body>baixa</Body>
      <VSeparator />

      <H3>Endereço:</H3>
      <Body>Av. Pipipipopopo XYZ...</Body>
      <VSeparator />

      <H3>Distância:</H3>
      <Body>5,8 KM</Body>
      <VSeparator />

      <H3>Status:</H3>
      <Body>Aberto</Body>
      <VSeparator />

      <H3>Horário de funcionamento:</H3>

      <HBox>
        <HBox.Item wrap>
          <Body>Abre:</Body>
        </HBox.Item>
        <HBox.Item wrap vAlign="center">
          <BodySecondary>00:00</BodySecondary>
        </HBox.Item>

        <HBox.Separator spacing="xLarge" />
        <HBox.Item wrap>
          <Body>Fecha:</Body>
        </HBox.Item>
        <HBox.Item wrap vAlign="center">
          <BodySecondary>00:00</BodySecondary>
        </HBox.Item>
      </HBox>

      {/*IC DO MAPS / WAZE / UBER / 99 / ÍC DE COMPARTILHAR*/}

      <VSeparator />
    </VBox>
  );
}
