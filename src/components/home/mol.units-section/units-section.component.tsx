import {
  Body,
  BodySecondary,
  HBox,
  VBox,
  VSeparator,
} from "@components/common";
import React from "react";
import { Dimensions, View } from "react-native";
import Mock_Image from "@assets/images/img_ubs_mock.jpg";
import { LatLng } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import { Button, Card } from "@rneui/base";

interface UnitsSectionProps {
  unitis: {
    id: string;
    coordinate: LatLng;
    localName: string;
    description: string;
  }[];
}

export const UnitsSection = (props: UnitsSectionProps) => {
  const screen = Dimensions.get("window");
  const width = screen.width;
  const height = screen.height;

  return (
    <VBox
      noGutter
      hAlign="center"
      //VER se ALINHO POR BAIXO OU POR CIMA>>
      style={{ position: "absolute", top: height * 0.49 }}
    >
      <Carousel
        data={props.unitis}
        renderItem={UnitItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
      />
    </VBox>
  );
};

const UnitItem = ({ item }) => (
  <Card containerStyle={{ borderRadius: 12, margin: 0, padding: 0 }}>
    <Card.Image
      source={Mock_Image}
      resizeMode="cover"
      borderTopLeftRadius={12}
      borderTopRightRadius={12}
    />
    <Card.Title>{item.localName}</Card.Title>
    <BodySecondary center>{item.description}</BodySecondary>
    <VSeparator />

    <VBox>
      <HBox>
        <HBox.Item>
          <Button title={"Ir"} radius={8} />
        </HBox.Item>
        <HBox.Separator />
        <HBox.Item>
          <Button title={"Ver unidade"} radius={8} color={"secondary"} />
        </HBox.Item>
      </HBox>
      <VSeparator />
    </VBox>
  </Card>
);
