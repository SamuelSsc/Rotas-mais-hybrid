import {
  Body,
  BodySecondary,
  Button,
  H2,
  HBox,
  VBox,
  VSeparator,
} from "@components/common";
import React from "react";
import { Dimensions, Pressable, View } from "react-native";
import { LatLng } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import { Card } from "@rneui/base";
import { Badge, CapacityLevel } from "@components/common/atm.badge";
import { commonTheme } from "@constants/obj.theme";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";

export type Unit = {
  id: string;
  coordinate: LatLng;
  localName: string;
  description: string;
  variant: CapacityLevel;
  image: any; // Adicione o tipo correto para a imagem
  onGo?: () => void; // Certifique-se de que onGo está definido em Unit
  going?: boolean;
};

interface UnitsSectionProps {
  unitis: Unit[];
  onUnitSelectedChange: (data: Unit) => void;
  onGo: () => void;
  going?: boolean;
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
        renderItem={({ item }) => (
          <UnitItem item={{ ...item, onGo: props.onGo, going: props.going }} />
        )}
        sliderWidth={width}
        itemWidth={width * 0.8}
        onSnapToItem={getItemData}
      />
    </VBox>
  );
};

interface UnitItemProps {
  item: Unit;
}

export const UnitItem = ({ item }: UnitItemProps) => {
  console.log(item.onGo);
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
        source={item.image}
        resizeMode="cover"
        borderTopLeftRadius={12}
        borderTopRightRadius={12}
      />
      <Card.Title>
        <H2>{item.localName}</H2>
      </Card.Title>
      <BodySecondary center numberOfLines={2} ellipsizeMode={"tail"}>
        {item.description}
      </BodySecondary>
      <VSeparator />
      <VBox>
        <HBox>
          <HBox.Item>
            <Button
              text={item.going ? "A caminho..." : "Ir"}
              onPress={item.onGo}
            />
          </HBox.Item>
          <HBox.Separator />
          <HBox.Item>
            <Button
              text={"Ver unidade"}
              variant="secondary"
              onPress={() => router.navigate(`/unit-detail/${item.id}`)}
            />
          </HBox.Item>
        </HBox>
        <VSeparator />
      </VBox>
    </Card>
  );
};
