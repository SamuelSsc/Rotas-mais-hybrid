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
import React from "react";

export const LoginForm = () => {
  return (
    <Card containerStyle={{ borderRadius: 12 }}>
      <Card.Title>
        <H2>Login</H2>
      </Card.Title>
      <Body>Preencha as informações abaixo, para realizar o Login:</Body>
      <VSeparator />
      <Input
        label="Email:"
        labelStyle={{ fontSize: 12, color: commonTheme.color.grayXDark }}
      />
      <VSeparator />
      {/* IMPLEMENTAR A SENHA COM *** */}
      <Input
        label="Senha:"
        labelStyle={{ fontSize: 12, color: commonTheme.color.grayXDark }}
      />
      <VBox noGutter hAlign="flex-start">
        <Button text={"Esqueceu a senha?"} variant="link" size="sm" />
      </VBox>
      <VSeparator />
      <Button text={"Entrar"} />
      <VSeparator spacing="small" />
      <HBox flexWrap>
        <HBox.Item wrap vAlign="center">
          <BodySecondary>Não possui uma conta?</BodySecondary>
        </HBox.Item>
        <HBox.Item wrap hAlign="flex-start">
          <Button text={"Crie uma!"} variant="link" size="sm" />
        </HBox.Item>
      </HBox>
    </Card>
  );
};
