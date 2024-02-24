import {
  Body,
  BodySecondary,
  Button,
  HBox,
  VBox,
  VSeparator,
} from "@components/common";
import React from "react";
import { Dimensions, Pressable, View } from "react-native";
import Mock_Image from "@assets/images/img_ubs_mock.jpg";
import { LatLng } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import { Card } from "@rneui/base";
import { Badge, CapacityLevel } from "@components/common/atm.badge";
import { commonTheme } from "@constants/obj.theme";
import { FontAwesome } from "@expo/vector-icons";

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
      {/* AJUSTAR O FUNCIONAMENTO DA SELEÇÃO DE PREFERIDOS AQUI EM BAIXO */}
      <Pressable
        style={{
          position: "absolute",
          zIndex: 1,
          right: 10,
          top: 10,
        }}
      >
        {({ pressed }) => (
          <FontAwesome
            name={"heart-o"}
            size={25}
            color={commonTheme.color.alert}
            style={{
              opacity: pressed ? 0.5 : 1,
              borderColor: commonTheme.color.alert,
            }}
          />
        )}
      </Pressable>
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
            <Button text={"Ir"} />
          </HBox.Item>
          <HBox.Separator />
          <HBox.Item>
            <Button text={"Ver unidade"} variant="secondary" />
          </HBox.Item>
        </HBox>
        <VSeparator />
      </VBox>
    </Card>
  );
};
