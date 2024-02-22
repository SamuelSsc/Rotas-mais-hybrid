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
import { Badge, CapacityLevel } from "@components/common/atm.badge";
import { commonTheme } from "@constants/obj.theme";

export type Unit = {
  id: string;
  coordinate: LatLng;
  localName: string;
  description: string;
  variant: CapacityLevel;
};
interface UnitsSectionProps {
  unitis: Unit[];
  onUnitSelectedChange: (data: Unit) => void;
}

export const UnitsSection = (props: UnitsSectionProps) => {
  const screen = Dimensions.get("window");
  const width = screen.width;
  const height = screen.height;

  const getItemData = (index: number) =>
    props.onUnitSelectedChange(props.unitis[index]);

  return (
    <VBox
      noGutter
      hAlign="center"
      style={{ position: "absolute", top: height * 0.48 }}
    >
      <Carousel
        data={props.unitis}
        renderItem={UnitItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        onSnapToItem={getItemData}
      />
    </VBox>
  );
};

const UnitItem = ({ item }) => {
  return (
    <Card
      containerStyle={{
        borderRadius: 12,
        margin: 0,
        padding: 0,
      }}
    >
      <View style={{ position: "absolute", zIndex: 1, left: 10, top: 10 }}>
        <Badge variant={item.variant} />
      </View>
      <Card.Image
        source={Mock_Image}
        resizeMode="cover"
        borderTopLeftRadius={12}
        borderTopRightRadius={12}
      />
      <Card.Title>{item.localName}</Card.Title>
      <BodySecondary center numberOfLines={2} ellipsizeMode={"tail"}>
        {item.description}
      </BodySecondary>
      <VSeparator />

      <VBox>
        <HBox>
          <HBox.Item>
            <Button title={"Ir"} radius={8} />
          </HBox.Item>
          <HBox.Separator />
          <HBox.Item>
            <Button
              title={"Ver unidade"}
              radius={8}
              type="outline"
              buttonStyle={{ borderColor: commonTheme.color.black }}
              titleStyle={{ color: commonTheme.color.grayDark }}
            />
          </HBox.Item>
        </HBox>
        <VSeparator />
      </VBox>
    </Card>
  );
};
