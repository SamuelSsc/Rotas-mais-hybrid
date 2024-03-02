import React from "react";
import { Button as Btn } from "@rneui/base";
import { commonTheme } from "@constants/obj.theme";

export type ButtonType = "primary" | "secondary" | "link";

interface ButtonProps {
  variant?: ButtonType;
  text: string;
  onPress?: () => void;
  size?: "sm" | "md" | "lg";
}
export const Button = ({
  variant = "primary",
  text,
  onPress,
  size = "md",
}: ButtonProps) => {
  if (variant === "primary") {
    return (
      <Btn
        title={text}
        radius={8}
        onPress={onPress}
        size={size}
        buttonStyle={{ backgroundColor: commonTheme.color.primary }}
      />
    );
  } else if (variant === "secondary") {
    return (
      <Btn
        title={text}
        radius={8}
        type="outline"
        buttonStyle={{ borderColor: commonTheme.color.black }}
        titleStyle={{ color: commonTheme.color.grayDark }}
        onPress={onPress}
        size={size}
      />
    );
  } else if (variant === "link") {
    return (
      <Btn
        title={text}
        type="clear"
        size={size}
        onPress={onPress}
        titleStyle={{
          fontSize: size === "sm" ? 12 : 14,
          color: commonTheme.color.primary,
        }}
      />
    );
  }
};
