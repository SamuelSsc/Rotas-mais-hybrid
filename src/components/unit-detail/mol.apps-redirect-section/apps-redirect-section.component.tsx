import { HBox } from "@components/common";
import React from "react";
import MapsImage from "@assets/images/img-app-google-maps.png";
import WazeImage from "@assets/images/img-app-waze.png";
import UberImage from "@assets/images/img-app-uber.png";
import NinetyNineImage from "@assets/images/img-app-99.png";
import { ImageApps } from "./apps-redirect-section.styled";
import { FontAwesome } from "@expo/vector-icons";

export const AppsRedirectSection = () => {
  return (
    <HBox>
      <HBox.Item wrap>
        <ImageApps source={MapsImage} />
      </HBox.Item>
      <HBox.Separator />

      <HBox.Item wrap>
        <ImageApps source={WazeImage} />
      </HBox.Item>
      <HBox.Separator />

      <HBox.Item wrap>
        <ImageApps source={UberImage} />
      </HBox.Item>
      <HBox.Separator />

      <HBox.Item wrap>
        <ImageApps source={NinetyNineImage} />
      </HBox.Item>
      <HBox.Separator />

      <HBox.Item wrap vAlign="center">
        <FontAwesome name="share-square-o" size={32} />
      </HBox.Item>
    </HBox>
  );
};
