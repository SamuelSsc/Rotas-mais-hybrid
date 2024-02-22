import { Body, BodySecondary, VBox } from "@components/common";
import React from "react";
import { Dimensions } from "react-native";
import Mock_Image from "@assets/images/img_ubs_mock.jpg";
import { LatLng } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import { Card } from "@rneui/base";

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
      style={{ position: "absolute", top: height * 0.55 }}
    >
      <Carousel
        data={props.unitis}
        renderItem={UnitItem}
        sliderWidth={width}
        itemWidth={width * 0.7}
      />
    </VBox>
  );
};

const UnitItem = ({ item }) => (
  <Card containerStyle={{ borderRadius: 12 }}>
    <Card.Image source={Mock_Image} resizeMode="center" />
    <Card.Title>{item.localName}</Card.Title>
    <BodySecondary center>{item.description}</BodySecondary>
  </Card>
);
