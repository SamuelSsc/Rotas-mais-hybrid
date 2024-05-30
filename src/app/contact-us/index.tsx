import { Button, Root, VBox, VSeparator } from "@components";
import { commonTheme } from "@constants/obj.theme";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "@rneui/base";
import React from "react";
import { TextInput } from "react-native-paper";

export default function ContacUsScreen() {
  return (
    <Root>
      <VSeparator />
      <VBox hAlign="center">
        <FontAwesome
          name="envelope"
          size={40}
          color={commonTheme.color.primary}
        />
      </VBox>

      <VBox>
        <VSeparator />
        <TextInput label="Nome" />

        <VSeparator />
        <TextInput label="Numero de telefone com DDD" />
        <VSeparator />
        <TextInput label="E-mail" />
        <VSeparator />
        <TextInput label="Como nos conheceu?" />
        <VSeparator />
        <TextInput label="Mensagem" />
      </VBox>

      <VBox hAlign="flex-end">
        <VSeparator />
        <Button
          text="Enviar"
          iconRight
          icon={
            <FontAwesome
              style={{ marginLeft: 4 }}
              name="paper-plane"
              color={"white"}
            />
          }
        />
      </VBox>
    </Root>
  );
}
