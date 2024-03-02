import {
  Body,
  BodySecondary,
  H1,
  H4,
  HBox,
  VBox,
  VSeparator,
} from "@components/common";
import React from "react";
import { Dimensions, Image } from "react-native";
import Mock_Image from "@assets/images/img_ubs_mock.jpg";
import { AppsRedirectSection } from "@components/unit-detail/mol.apps-redirect-section";

export const UnitInfo = () => {
  const screen = Dimensions.get("window");
  const width = screen.width;

  return (
    <VBox>
      <VSeparator />
      {/* //COLOCAR O NOME DA UNIDADE COMO TITULO DA PÁGINA SE POSSIVEL */}
      <H1>Unidade 123...</H1>

      {/* ABSTRAIR ISSO AQUI PARA UMA SEÇÃO */}
      <Image
        source={Mock_Image}
        resizeMode="contain"
        style={{ maxWidth: width * 0.9, height: 300 }}
      />
      <H4>Lotação:</H4>
      <Body>baixa</Body>
      <VSeparator />

      <H4>Endereço:</H4>
      <Body>Av. Pipipipopopo XYZ...</Body>
      <VSeparator />

      <H4>Distância:</H4>
      <Body>5,8 KM</Body>
      <VSeparator />

      <H4>Status:</H4>
      <Body>Aberto</Body>
      <VSeparator />

      <H4>Horário de funcionamento:</H4>

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

      {/*IC DO MAPS / WAZE / UBER / 99 / ÍC DE COMPARTILHAR AQUI*/}
      <VSeparator />
      <AppsRedirectSection />

      <VSeparator />
    </VBox>
  );
};
