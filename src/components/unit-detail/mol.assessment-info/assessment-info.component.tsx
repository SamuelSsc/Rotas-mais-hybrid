import { Button, H2, H3, HBox, VBox, VSeparator } from "@components/common";
import { Card } from "@rneui/base";
import { router } from "expo-router";
import React from "react";

export const AssessmentInfo = () => {
  return (
    <VBox bgColor>
      <VSeparator />
      <H2>O que as pessoas estão dizendo:</H2>
      <VSeparator />

      <HBox>
        <HBox.Item>
          <Card
            containerStyle={{
              borderRadius: 8,
              margin: 0,
            }}
          >
            <Card.Title>
              <H3>Lotação:</H3>
            </Card.Title>
          </Card>
        </HBox.Item>
        <HBox.Separator spacing="small" />

        <HBox.Item>
          <Card
            containerStyle={{
              borderRadius: 8,
              margin: 0,
              padding: 8,
            }}
          >
            <Card.Title>
              <H3>Tempo de atendimento:</H3>
            </Card.Title>
          </Card>
        </HBox.Item>
      </HBox>
      <VSeparator />
      <VBox noGutter hAlign="flex-end">
        <Button
          variant="link"
          text="Ver comentários"
          onPress={() => router.push("/unit-detail/comment")}
        />
      </VBox>
      <VSeparator />
    </VBox>
  );
};
