import {
  Body,
  Button,
  H2,
  H3,
  H4,
  HBox,
  VBox,
  VSeparator,
} from "@components/common";
import { Card } from "@rneui/base";
import { router } from "expo-router";
import React from "react";
import { Arc, Indicator, Progress } from "react-native-cool-speedometer";
import Speedometer from "react-native-cool-speedometer/dist/Speedometer";

export const AssessmentInfo = () => {
  const center = 250 / 2;

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
            <Speedometer
              value={80}
              max={100}
              angle={180}
              lineCap="round"
              accentColor="red"
              width={150}
              height={50}
            >
              <Arc arcWidth={20} />
              <Progress arcWidth={20} />
              <Indicator fixValue />
            </Speedometer>
            <Body center>{"Lotado"}</Body>
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
            <H3 center>3 Hrs</H3>
            <VSeparator />
            <VSeparator spacing="small" />
            <VSeparator spacing="small" />
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
// Comentario A
// Comentario B
// Comentario C
