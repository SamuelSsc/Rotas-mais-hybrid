import { Button, H1, HBox, Label, Root, VBox, VSeparator } from "@components";
import React from "react";
import PlaceHolderImage from "@assets/images/placeholder-avatar-3.png";
import { Image } from "react-native";
import { Divider, Switch, TextInput } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { commonTheme } from "@constants/obj.theme";

export default function ProfileScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <Root>
      <VBox>
        <VSeparator />

        <HBox>
          <HBox.Item wrap>
            <Image
              source={PlaceHolderImage}
              style={{ width: 64, height: 64, borderRadius: 32 }}
            />
            <Button text="Alterar Imagem" variant="link" />
          </HBox.Item>
        </HBox>
        <Divider />
        <VSeparator size="large" />

        <H1>Dados da conta</H1>
        <VSeparator />
        <TextInput value="Usuário 1" label="Nome" />

        <VSeparator />
        <TextInput value="(11) 99999-9999" label="Numero de telefone com DDD" />
        <VSeparator />
        <TextInput value="email@example.com" label="E-mail" />
        <VSeparator />
        <TextInput value="111.111.111-11" label="CPF" disabled />
        <HBox>
          <HBox.Item wrap>
            <Button text="Alterar dados" variant="link" />
          </HBox.Item>
        </HBox>

        <VSeparator />

        <H1>Permissões do App</H1>
        <VSeparator />
        <HBox>
          <HBox.Item>
            <Label>Acesso a localização</Label>
          </HBox.Item>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </HBox>

        <VSeparator />
        <HBox>
          <HBox.Item wrap>
            <Button
              text="Sair da conta"
              variant="linkAlert"
              iconRight
              icon={
                <FontAwesome
                  color={commonTheme.color.alert}
                  name="sign-out"
                  size={16}
                  style={{ marginLeft: 4 }}
                />
              }
            />
          </HBox.Item>
        </HBox>
      </VBox>
    </Root>
  );
}
