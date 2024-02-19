export interface BaseColor {
  grayXLight: string;
  grayLight: string;
  gray: string;
  grayDark: string;
  grayXDark: string;
  white: string;
  black: string;
  alpha: string;

  grayXDarkTransparent: string;

  whiteTransparent: string;

  successLight: string;
  success: string;
  successDark: string;

  warningLight: string;
  warning: string;
  warningDark: string;

  alertLight: string;
  alert: string;
  alertDark: string;

  primaryLight: string;
  primary: string;
  primaryDark: string;

  callToActionDark: string;
  callToAction: string;
  callToActionLight: string;
  callToActionXLight: string;

  whatsapp: string;
}

interface BaseFontSize {
  xxSmall: string;
  xSmall: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
}

interface BaseIconSize {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
}

interface BaseSpacing {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  gutter: number;
  halfGutter: number;
}

interface BaseZIndex {
  negative: number;
  top: number;
}

export interface BaseTheme {
  theme: string;
  color: BaseColor;
  fontSize: BaseFontSize;
  iconSize: BaseIconSize;
  spacing: BaseSpacing;
  zIndex: BaseZIndex;
}

export interface ThemeProps {
  theme?: BaseTheme;
}
