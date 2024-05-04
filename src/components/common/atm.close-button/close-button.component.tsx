import { commonTheme } from "@constants/obj.theme";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";

interface IconProps {
  onTap?: () => void;
}

export const CloseButton = (props: IconProps) => {
  return (
    <Pressable onPress={props.onTap}>
      <FontAwesome name={"close"} size={25} color={commonTheme.color.black} />
    </Pressable>
  );
};
