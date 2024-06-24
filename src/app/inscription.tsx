import {
  BodySecondary,
  Button,
  H1,
  H3,
  HBox,
  Root,
  VBox,
  VSeparator,
} from "@components";
import { commonTheme } from "@constants/obj.theme";
import { Card, Divider } from "@rneui/base";
import { router } from "expo-router";
import React from "react";
import { TextInput } from "react-native-paper";

export default function PaymentMethodScreen() {
  return (
    <Root>
      <VBox hAlign="center">
        <H1 style={{ color: commonTheme.color.white }}>Assinaturas:</H1>
        <Card
          containerStyle={{
            borderRadius: 12,
            width: 350,
            backgroundColor: commonTheme.color.primary,
          }}
        >
          <VBox noGutter hAlign="center" vAlign="center">
            <H3 style={{ color: commonTheme.color.white }}>
              Anual 50% de desconto
            </H3>
            <BodySecondary style={{ color: commonTheme.color.white }}>
              9,99R$ por mês
            </BodySecondary>
          </VBox>
        </Card>
        <VSeparator spacing="small" />

        <Card containerStyle={{ borderRadius: 12, width: 350 }}>
          <VBox noGutter hAlign="center" vAlign="center">
            <H3>Semestral 25% de desconto</H3>
            <BodySecondary>14,99R$ por mês</BodySecondary>
          </VBox>
        </Card>
        <VSeparator spacing="small" />

        <Card containerStyle={{ borderRadius: 12, width: 350 }}>
          <VBox noGutter hAlign="center" vAlign="center">
            <H3>Mensal</H3>
            <BodySecondary>19,99R$ por mês</BodySecondary>
          </VBox>
        </Card>
      </VBox>
      <VSeparator />
      <Divider />

      <VBox>
        <VSeparator />
        <TextInput label="CPF" placeholder="000.000.000-00" />

        <VSeparator />
        <TextInput
          label="Numero de telefone com DDD"
          placeholder="(00) 90000-0000"
        />
        <VSeparator />
        <TextInput label="E-mail" placeholder="email@example.com" />
        <VSeparator />
        <HBox>
          <HBox.Item>
            <TextInput
              label="Cartão de Crédito"
              placeholder="0000 0000 0000 0000"
            />
          </HBox.Item>
          <HBox.Separator spacing="small" />

          <HBox.Item wrap>
            <TextInput label="CVV" placeholder="000" />
          </HBox.Item>
        </HBox>
        <VSeparator />
        <HBox>
          <HBox.Item>
            <TextInput label="Validade" placeholder="MM/AA" />
          </HBox.Item>
          <HBox.Separator spacing="small" />

          <HBox.Item>
            <TextInput label="Parcela" placeholder="12x" />
          </HBox.Item>
        </HBox>
        <VSeparator />
        <Button
          text="Prosseguir"
          variant="primary"
          onPress={() => router.push("/(tabs)/")}
        />
      </VBox>
    </Root>
  );
}
