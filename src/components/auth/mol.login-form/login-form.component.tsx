import {
  Body,
  BodySecondary,
  Button,
  H2,
  HBox,
  VBox,
  VSeparator,
} from "@components/common";
import { commonTheme } from "@constants/obj.theme";
import { Card, Input } from "@rneui/base";
import { router } from "expo-router";
import React from "react";

export const LoginForm = () => {
  //Extrair a logica do erro para um componente atomico e reaproveitar.
  return (
    <Card containerStyle={{ borderRadius: 12 }}>
      <VSeparator />
      <Card.Title>
        <H2>Login</H2>
      </Card.Title>
      <Body>Preencha as informações abaixo, para realizar o Login:</Body>
      <VSeparator />
      <Input
        label="Email:"
        labelStyle={{
          fontSize: 12,
          color: commonTheme.color.black,
        }}
        style={{
          borderColor: commonTheme.color.primary,
          color: commonTheme.color.black,
        }}
        // renderErrorMessage={true}
        // errorMessage="Email inválido"
        // errorStyle={{ color: commonTheme.color.alert }}
      />
      <VSeparator />

      <Input
        label="Senha:"
        labelStyle={{ fontSize: 12, color: commonTheme.color.black }}
        style={{
          borderColor: commonTheme.color.alert,
          color: commonTheme.color.black,
        }}
        secureTextEntry={true}
        // renderErrorMessage={true}
        // errorMessage="Senha inválida"
        // errorStyle={{ color: commonTheme.color.alert }}
      />
      <VBox noGutter hAlign="flex-start">
        <Button text={"Esqueceu a senha?"} variant="link" size="sm" />
      </VBox>
      <VSeparator />
      <Button text={"Entrar"} onPress={() => router.push("/(tabs)/")} />
      <VSeparator spacing="small" />
      <HBox flexWrap>
        <HBox.Item wrap vAlign="center">
          <BodySecondary>Não possui uma conta?</BodySecondary>
        </HBox.Item>
        <HBox.Item wrap hAlign="flex-start">
          <Button
            text={"Crie uma!"}
            variant="link"
            size="sm"
            onPress={() => router.push("/sign-up")}
          />
        </HBox.Item>
      </HBox>
      <VSeparator />
    </Card>
  );
};
