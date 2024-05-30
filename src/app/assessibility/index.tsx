import React from "react";

import { H1, H3, H4, HBox, Label, Root, VBox, VSeparator } from "@components";
import { Divider, RadioButton, Switch } from "react-native-paper";

export default function AssessibilityScreen() {
  const [valueTheme, setThemeValue] = React.useState("light");
  const [textSize, setTextSize] = React.useState("medium");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <Root>
      <VBox>
        <VSeparator />
        <H1>Configuração</H1>
        <VSeparator />

        <H3>Tema</H3>
        <RadioButton.Group
          onValueChange={(value) => setThemeValue(value)}
          value={valueTheme}
        >
          <RadioButton.Item label="Claro" value="light" />
          <RadioButton.Item label="Escuro" value="dark" />
        </RadioButton.Group>
        <Divider />
        <VSeparator />

        <H3>Tamanho da fonte:</H3>
        <RadioButton.Group
          onValueChange={(value) => setTextSize(value)}
          value={textSize}
        >
          <RadioButton.Item label="Pequeno" value="small" />
          <RadioButton.Item label="Regular" value="medium" />
          <RadioButton.Item label="Grande" value="big" />
          <RadioButton.Item label="Muito grande" value="veryBig" />
        </RadioButton.Group>
        <Divider />
        <VSeparator />

        <HBox>
          <HBox.Item>
            <H3>Alto Contraste</H3>
          </HBox.Item>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </HBox>
      </VBox>
    </Root>
  );
}
