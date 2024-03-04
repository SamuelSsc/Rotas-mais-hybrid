import { Body, Button, H2, VSeparator } from "@components/common";
import { commonTheme } from "@constants/obj.theme";
import { Card, CheckBox, Input } from "@rneui/base";
import React from "react";

export const SignUpForm = () => {
  return (
    <Card containerStyle={{ borderRadius: 12 }}>
      <Card.Title>
        <H2>Cadastro</H2>
      </Card.Title>
      <Body>
        Preencha as informações abaixo para realizar seu cadastro e criar a sua
        conta:
      </Body>
      <VSeparator />
      <Input
        label="Nome completo:"
        labelStyle={{ fontSize: 12, color: commonTheme.color.grayXDark }}
      />
      <VSeparator />
      <Input
        label="Número de telefone com DDD:"
        labelStyle={{ fontSize: 12, color: commonTheme.color.grayXDark }}
      />
      <VSeparator />
      <Input
        label="E-mail:"
        labelStyle={{ fontSize: 12, color: commonTheme.color.grayXDark }}
      />
      <VSeparator />
      <Input
        label="Senha:"
        labelStyle={{ fontSize: 12, color: commonTheme.color.grayXDark }}
        secureTextEntry={true}
      />
      <VSeparator />
      <Input
        label="Repetir Senha:"
        labelStyle={{ fontSize: 12, color: commonTheme.color.grayXDark }}
        secureTextEntry={true}
      />
      <CheckBox checked={false} title={"Concordo com os termos de uso"} />
      <CheckBox
        checked={false}
        title={"Concordo com a política de privacidade"}
      />
      <Button text={"Cadastrar"} />
    </Card>
  );
};
