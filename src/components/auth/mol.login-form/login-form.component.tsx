import {
  Body,
  BodySecondary,
  H2,
  HBox,
  VBox,
  VSeparator,
} from "@components/common";
import { commonTheme } from "@constants/obj.theme";
import { Button, Card, Input } from "@rneui/base";
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
        <Button
          title={"Esqueceu a senha?"}
          type="clear"
          size="sm"
          titleStyle={{ fontSize: 14 }}
        />
      </VBox>
      <VSeparator />
      <Button title={"Entrar"} radius={8} />
      <VSeparator spacing="small" />
      <HBox flexWrap>
        <HBox.Item wrap vAlign="center">
          <BodySecondary>Não possui uma conta?</BodySecondary>
        </HBox.Item>
        <HBox.Item wrap hAlign="flex-start">
          <Button
            title={"Crie uma!"}
            type="clear"
            size="sm"
            titleStyle={{ fontSize: 12 }}
          />
        </HBox.Item>
      </HBox>
    </Card>
  );
};
