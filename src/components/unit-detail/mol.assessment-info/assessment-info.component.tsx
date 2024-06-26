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
import React, { useState } from "react";
import { Arc, Indicator, Progress } from "react-native-cool-speedometer";
import Speedometer from "react-native-cool-speedometer/dist/Speedometer";
import { GetFeedback } from "@components/unit-detail/mol.get-feedback";

export const AssessmentInfo = () => {
  const [visibleFeedback, setVisibleFeedback] = useState(false);
  const [afterFeedback, setAfterFeedback] = useState(false);

  const handleFinishFeedback = (val: boolean) => {
    setVisibleFeedback(val);
    setAfterFeedback(true);
  };

  return (
    <VBox bgColor>
      <VSeparator />
      <H2>O que as pessoas estão dizendo:</H2>
      <Button
        variant="secondary"
        text="Deixar meu feedback"
        onPress={() => setVisibleFeedback(true)}
      />
      {visibleFeedback ? (
        <GetFeedback onFinishTimer={handleFinishFeedback} />
      ) : null}

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
              value={afterFeedback ? 70 : 55}
              max={100}
              angle={180}
              lineCap="round"
              accentColor={afterFeedback ? "#C15D5D" : "#A38D00"}
              width={150}
              height={50}
            >
              <Arc arcWidth={20} />
              <Progress arcWidth={20} />
              <Indicator fixValue />
            </Speedometer>
            <Body center>{afterFeedback ? "Alta" : "Aceitável"}</Body>
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
              <H3>Tempo médio de atendimento:</H3>
            </Card.Title>
            <H3 center>
              {afterFeedback ? "Acima de 3 hrs" : "Entre 2 e 3 hrs"}
            </H3>
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
          text="Ver comentários (3)"
          onPress={() => router.push("/unit-detail/comment")}
        />
      </VBox>
      <VSeparator />
    </VBox>
  );
};
