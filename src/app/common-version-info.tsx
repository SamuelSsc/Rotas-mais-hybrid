import {
  Body,
  Button,
  H1,
  H3,
  HBox,
  Root,
  VBox,
  VSeparator,
} from "@components";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
import React from "react";

export default function CommonVersionInfoScreen() {
  return (
    <Root>
      <VBox vGrow hAlign="center">
        <VSeparator />
        <H1>Plano Gratuito:</H1>
        <Body>Ao escolher o plano gratuito você possui acesso há:</Body>

        <VSeparator />
        <HBox>
          <HBox.Separator />
          <HBox.Item wrap vAlign="center">
            <FontAwesome name="close" color={"red"} size={32} />
          </HBox.Item>
          <HBox.Separator />
          <HBox.Item>
            <H3>Lotação em tempo real</H3>
            <Body>
              Informação em tempo real sobre a quantidade de pessoas e ou fila
              de espera no atendimento de uma unidade de saúde
            </Body>
          </HBox.Item>
        </HBox>

        <VSeparator />
        <HBox>
          <HBox.Separator />
          <HBox.Item wrap vAlign="center">
            <FontAwesome name="check-circle" color={"green"} size={32} />
          </HBox.Item>
          <HBox.Separator />
          <HBox.Item>
            <H3>Localização do melhor trajeto</H3>
            <Body>
              Informação do melhor trajeto e opções de transporte para
              deslocamento até as Unidades
            </Body>
          </HBox.Item>
        </HBox>

        <VSeparator />
        <HBox>
          <HBox.Separator />
          <HBox.Item wrap vAlign="center">
            <FontAwesome name="check-circle" color={"green"} size={32} />
          </HBox.Item>
          <HBox.Separator />
          <HBox.Item>
            <H3>Informação sobre a unidade</H3>
            <Body>
              Informação de contato, localização, acessibilidade e funcionamento
              sobre as Unidades de Saúde
            </Body>
          </HBox.Item>
        </HBox>
        <VSeparator />
        <Button text="Prosseguir" variant="secondary" />
      </VBox>
    </Root>
  );
}
