import {
  Body,
  Button,
  H1,
  H3,
  H4,
  HBox,
  Root,
  VBox,
  VSeparator,
} from "@components";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
import { router, useRouter } from "expo-router";
import React from "react";

export default function VersionsScreen() {
  return (
    <Root>
      <VBox vGrow vAlign="center" hAlign="center">
        <VSeparator />
        <H1>Plano Express:</H1>

        <VSeparator spacing="small" />
        <HBox>
          <HBox.Item wrap>
            <FontAwesome name="check-circle" color={"green"} size={16} />
          </HBox.Item>
          <HBox.Separator spacing="small" />
          <HBox.Item wrap>
            <H3>Lotação em tempo real</H3>
          </HBox.Item>
        </HBox>

        <VSeparator spacing="small" />
        <HBox>
          <HBox.Item wrap>
            <FontAwesome name="check-circle" color={"green"} size={16} />
          </HBox.Item>
          <HBox.Separator spacing="small" />
          <HBox.Item wrap>
            <H3>Localização do melhor trajeto</H3>
          </HBox.Item>
        </HBox>

        <VSeparator spacing="small" />
        <HBox>
          <HBox.Item wrap>
            <FontAwesome name="check-circle" color={"green"} size={16} />
          </HBox.Item>
          <HBox.Separator spacing="small" />
          <HBox.Item wrap>
            <H3>Informação sobre a unidade</H3>
          </HBox.Item>
        </HBox>
        <Button
          text="Ver mais Informações"
          variant="link"
          onPress={() => router.push("/premium-version-info")}
        />

        <VSeparator />
        <Divider />
        <VSeparator />

        <H1>Plano Gratuito:</H1>

        <VSeparator spacing="small" />
        <HBox>
          <HBox.Item wrap>
            <FontAwesome name="close" color={"red"} size={16} />
          </HBox.Item>
          <HBox.Separator spacing="small" />
          <HBox.Item wrap>
            <H3>Lotação em tempo real</H3>
          </HBox.Item>
        </HBox>

        <VSeparator spacing="small" />
        <HBox>
          <HBox.Item wrap>
            <FontAwesome name="check-circle" color={"green"} size={16} />
          </HBox.Item>
          <HBox.Separator spacing="small" />
          <HBox.Item wrap>
            <H3>Localização do melhor trajeto</H3>
          </HBox.Item>
        </HBox>

        <VSeparator spacing="small" />
        <HBox>
          <HBox.Item wrap>
            <FontAwesome name="check-circle" color={"green"} size={16} />
          </HBox.Item>
          <HBox.Separator spacing="small" />
          <HBox.Item wrap>
            <H3>Informação sobre a unidade</H3>
          </HBox.Item>
        </HBox>
        <Button
          text="Ver mais Informações"
          variant="link"
          onPress={() => router.push("/common-version-info")}
        />
      </VBox>
    </Root>
  );
}
