import { Button, H3, HBox, VBox, VSeparator } from "@components/common";
import { Card } from "@rneui/base";
import React from "react";

export const AssessmentInfo = () => {
  return (
    <VBox bgColor>
      <VSeparator />
      <H3>O que as pessoas estão dizendo:</H3>
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
              <H3>Tempo para atendimento:</H3>
            </Card.Title>
          </Card>
        </HBox.Item>
        <HBox.Separator spacing="small" />

        <HBox.Item>
          <Card
            containerStyle={{
              borderRadius: 8,
              margin: 0,
            }}
          >
            <Card.Title>
              <H3>Satisfação:</H3>
              {/* RANTING */}
            </Card.Title>
          </Card>
        </HBox.Item>
      </HBox>
      <VSeparator />
      <VBox noGutter hAlign="flex-end">
        <Button variant="link" text="Ver comentários" />
      </VBox>
      <VSeparator />
    </VBox>
  );
};
