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
import Mock_Image from "@assets/images/Mock-Image-3.jpeg";
import { AppsRedirectSection } from "@components/unit-detail/mol.apps-redirect-section";

export const UnitInfo = () => {
  const screen = Dimensions.get("window");
  const width = screen.width;

  return (
    <VBox>
      <VSeparator />
      {/* //COLOCAR O NOME DA UNIDADE COMO TITULO DA PÁGINA SE POSSIVEL */}
      <H1>Hospital Regional Sul</H1>

      {/* ABSTRAIR ISSO AQUI PARA UMA SEÇÃO */}
      <Image
        source={Mock_Image}
        resizeMode="contain"
        style={{ maxWidth: width * 0.9, height: 300 }}
      />
      <H4>Lotação:</H4>
      <Body>Muito Cheio</Body>
      <VSeparator />

      <H4>Endereço:</H4>
      <Body>
        R. Gen. Roberto Alves de Carvalho Filho, 270 - Santo Amaro, São Paulo -
        SP, 04744-000
      </Body>
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
          <BodySecondary>07:00</BodySecondary>
        </HBox.Item>

        <HBox.Separator spacing="xLarge" />
        <HBox.Item wrap>
          <Body>Fecha:</Body>
        </HBox.Item>
        <HBox.Item wrap vAlign="center">
          <BodySecondary>18:00</BodySecondary>
        </HBox.Item>
      </HBox>

      <VSeparator />
      <AppsRedirectSection />

      <VSeparator />
    </VBox>
  );
};
