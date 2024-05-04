import {
  Body,
  BodySecondary,
  HBox,
  VBox,
  VSeparator,
} from "@components/common";
import { Badge, CapacityLevel } from "@components/common/atm.badge";
import { CloseButton } from "@components/common/atm.close-button";
import { Card } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import ProgressBar from "react-native-progress/Bar";

type FeedbackStatus = "capacity" | "time";

interface GetFeedbackProps {
  onFinishTimer: (val: boolean) => void;
}

export const GetFeedback = ({ onFinishTimer }: GetFeedbackProps) => {
  const [progress, setProgress] = useState(1);
  const [feedbackStatus, setFeedbackStatus] =
    useState<FeedbackStatus>("capacity");

  const handleTap = (variant: CapacityLevel) => {
    console.log(variant);
    setFeedbackStatus("time");
  };

  const handleFeedbackGotTap = (variant: TimerMedia) => {
    console.log(variant);
    onFinishTimer(false);
  };

  const handleCloseCard = () => {
    onFinishTimer(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        let decrementAmount = 1 / (1 * 60);
        const newProgress = Math.max(prevProgress - decrementAmount, 0);
        if (newProgress === 0) {
          console.log("Deve Destruir o componente");
          onFinishTimer(false);
        }

        return newProgress;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [1]);

  return (
    <Card
      containerStyle={{
        borderRadius: 8,
        margin: 0,
        paddingTop: 4,
      }}
    >
      {/* // TORNAR ESSE CARD AQUI UM ABSOLUTE */}
      <HBox>
        <HBox.Item>
          <ProgressBar
            progress={progress}
            width={320}
            height={5}
            color="#00e0ff"
            unfilledColor="#3d5875"
            borderWidth={0}
            borderRadius={8}
          />
        </HBox.Item>
        <HBox.Item hAlign="flex-end" wrap vAlign="center">
          <CloseButton onTap={handleCloseCard} />
        </HBox.Item>
      </HBox>

      <VSeparator />
      {feedbackStatus === "capacity" ? (
        <CapacityFeedback onTap={handleTap} />
      ) : (
        <TimeToBeTreated onTap={handleFeedbackGotTap} />
      )}
    </Card>
  );
};

interface CapacityFeedbackProps {
  onTap: (variant: CapacityLevel) => void;
}

const CapacityFeedback = ({ onTap }: CapacityFeedbackProps) => {
  return (
    <>
      <Body>Selecione abaixo o quão lotado estava em sua visão:</Body>
      <VSeparator />

      <VBox hAlign="center" vAlign="center" noGutter>
        <Badge
          variant={CapacityLevel.Empty}
          onTap={() => onTap(CapacityLevel.Empty)}
        />
        <VSeparator spacing="small" />
        <Badge
          variant={CapacityLevel.Medium}
          onTap={() => onTap(CapacityLevel.Medium)}
        />
        <VSeparator spacing="small" />
        <Badge
          variant={CapacityLevel.Full}
          onTap={() => onTap(CapacityLevel.Full)}
        />
        <VSeparator spacing="small" />
        <Badge
          variant={CapacityLevel.VeryFull}
          onTap={() => onTap(CapacityLevel.VeryFull)}
        />
      </VBox>
    </>
  );
};

interface TimeToBeTreatedProps {
  onTap: (variant: TimerMedia) => void;
}

const TimeToBeTreated = ({ onTap }: TimeToBeTreatedProps) => {
  return (
    <>
      <Body>
        Selecione abaixo aproximadamente quanto tempo levou para ser atendido:
      </Body>
      <VSeparator />
      <HBox>
        <HBox.Item>
          <Pressable onPress={() => onTap(TimerMedia.One)}>
            <Card containerStyle={{ margin: 0, borderRadius: 12 }}>
              <BodySecondary>Menos de 1hr</BodySecondary>
            </Card>
          </Pressable>
        </HBox.Item>
        <HBox.Separator spacing="xSmall" />

        <HBox.Item>
          <Pressable onPress={() => onTap(TimerMedia.Two)}>
            <Card containerStyle={{ margin: 0, borderRadius: 12 }}>
              <BodySecondary>Entre 1 e 2 hrs</BodySecondary>
            </Card>
          </Pressable>
        </HBox.Item>
        <HBox.Separator spacing="xSmall" />

        <HBox.Item>
          <Pressable onPress={() => onTap(TimerMedia.Three)}>
            <Card containerStyle={{ margin: 0, borderRadius: 12 }}>
              <BodySecondary>Entre 2 e 3 hrs</BodySecondary>
            </Card>
          </Pressable>
        </HBox.Item>
        <HBox.Separator spacing="xSmall" />

        <HBox.Item>
          <Pressable onPress={() => onTap(TimerMedia.Four)}>
            <Card containerStyle={{ margin: 0, borderRadius: 12 }}>
              <BodySecondary>+ 3 hrs</BodySecondary>
            </Card>
          </Pressable>
        </HBox.Item>
      </HBox>
    </>
  );
};

enum TimerMedia {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}
