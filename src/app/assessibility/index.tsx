import React from "react";

import { H1, H3, HBox, Root, VBox, VSeparator } from "@components";
import { Divider, RadioButton, Switch } from "react-native-paper";

export default function AssessibilityScreen() {
  const [valueTheme, setThemeValue] = React.useState("light");
  const [textSize, setTextSize] = React.useState("medium");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    if (!isSwitchOn) {
      setThemeValue("dark");
    }
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <Root>
      <VBox
        vGrow
        style={{ backgroundColor: valueTheme === "dark" ? "#212121" : "#fff" }}
      >
        <VSeparator />
        <H1
          style={{
            color: isSwitchOn
              ? "yellow"
              : valueTheme === "dark"
              ? "#FAFAFA"
              : "#212121",
            fontSize:
              textSize === "small"
                ? "20px"
                : textSize === "big"
                ? "28px"
                : textSize === "veryBig"
                ? "30px"
                : "22px",
          }}
        >
          Configuração
        </H1>
        <VSeparator />

        <H3
          style={{
            color: isSwitchOn
              ? "yellow"
              : valueTheme === "dark"
              ? "#FAFAFA"
              : "#212121",
            fontSize:
              textSize === "small"
                ? "14px"
                : textSize === "big"
                ? "22px"
                : textSize === "veryBig"
                ? "26px"
                : "16px",
          }}
        >
          Tema
        </H3>
        <RadioButton.Group
          onValueChange={(value) => setThemeValue(value)}
          value={valueTheme}
        >
          <RadioButton.Item
            color={
              isSwitchOn
                ? "#109010"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121"
            }
            label="Claro"
            value="light"
            labelStyle={{
              color: isSwitchOn
                ? "yellow"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121",
              fontSize:
                textSize === "small"
                  ? 12
                  : textSize === "big"
                  ? 18
                  : textSize === "veryBig"
                  ? 20
                  : 16,
            }}
          />
          <RadioButton.Item
            color={
              isSwitchOn
                ? "#109010"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121"
            }
            label="Escuro"
            value="dark"
            labelStyle={{
              color: isSwitchOn
                ? "yellow"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121",
              fontSize:
                textSize === "small"
                  ? 12
                  : textSize === "big"
                  ? 18
                  : textSize === "veryBig"
                  ? 20
                  : 16,
            }}
          />
        </RadioButton.Group>
        <Divider />
        <VSeparator />

        <H3
          style={{
            color: isSwitchOn
              ? "yellow"
              : valueTheme === "dark"
              ? "#FAFAFA"
              : "#212121",
            fontSize:
              textSize === "small"
                ? "14px"
                : textSize === "big"
                ? "22px"
                : textSize === "veryBig"
                ? "26px"
                : "16px",
          }}
        >
          Tamanho da fonte:
        </H3>
        <RadioButton.Group
          onValueChange={(value) => setTextSize(value)}
          value={textSize}
        >
          <RadioButton.Item
            color={
              isSwitchOn
                ? "#109010"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121"
            }
            label="Pequeno"
            value="small"
            labelStyle={{
              color: isSwitchOn
                ? "yellow"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121",
              fontSize:
                textSize === "small"
                  ? 12
                  : textSize === "big"
                  ? 18
                  : textSize === "veryBig"
                  ? 20
                  : 16,
            }}
          />
          <RadioButton.Item
            color={
              isSwitchOn
                ? "#109010"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121"
            }
            label="Regular"
            value="medium"
            labelStyle={{
              color: isSwitchOn
                ? "yellow"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121",
              fontSize:
                textSize === "small"
                  ? 12
                  : textSize === "big"
                  ? 18
                  : textSize === "veryBig"
                  ? 20
                  : 16,
            }}
          />
          <RadioButton.Item
            color={
              isSwitchOn
                ? "#109010"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121"
            }
            label="Grande"
            value="big"
            labelStyle={{
              color: isSwitchOn
                ? "yellow"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121",
              fontSize:
                textSize === "small"
                  ? 12
                  : textSize === "big"
                  ? 18
                  : textSize === "veryBig"
                  ? 20
                  : 16,
            }}
          />
          <RadioButton.Item
            color={
              isSwitchOn
                ? "#109010"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121"
            }
            label="Muito grande"
            value="veryBig"
            labelStyle={{
              color: isSwitchOn
                ? "yellow"
                : valueTheme === "dark"
                ? "#FAFAFA"
                : "#212121",
              fontSize:
                textSize === "small"
                  ? 12
                  : textSize === "big"
                  ? 18
                  : textSize === "veryBig"
                  ? 20
                  : 16,
            }}
          />
        </RadioButton.Group>
        <Divider />
        <VSeparator />

        <HBox>
          <HBox.Item>
            <H3
              style={{
                color: isSwitchOn
                  ? "yellow"
                  : valueTheme === "dark"
                  ? "#FAFAFA"
                  : "#212121",
                fontSize:
                  textSize === "small"
                    ? "14px"
                    : textSize === "big"
                    ? "22px"
                    : textSize === "veryBig"
                    ? "26px"
                    : "16px",
              }}
            >
              Alto Contraste
            </H3>
          </HBox.Item>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </HBox>
      </VBox>
    </Root>
  );
}
