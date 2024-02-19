import { ThemeProps } from "@constants/obj.theme";

export type TextVariantType =
  | "alert"
  | "success"
  | "disabled"
  | "white"
  | "primary"
  | "black"
  | "primaryDark"
  | "grayDark";

export interface TextProps {
  variant?: TextVariantType;
  center?: boolean;
  semiBold?: boolean;
  bold?: boolean;
}

export const TextVariant: (
  props: ThemeProps
) => Record<TextVariantType, string> = (props) => ({
  success: props.theme.color.successDark,
  alert: props.theme.color.alertDark,
  disabled: props.theme.color.gray,
  white: props.theme.color.white,
  primary: props.theme.color.primary,
  primaryDark: props.theme.color.primaryDark,
  black: props.theme.color.black,
  grayDark: props.theme.color.grayDark,
});
