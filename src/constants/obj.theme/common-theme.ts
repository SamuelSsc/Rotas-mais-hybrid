import { BaseColor, BaseTheme } from "./theme.interface";

const neutralColor = {
  grayXLight: "#F6F6F9",
  grayLight: "#F0F0F0",
  gray: "#E6E6E6",
  grayDark: "#939292",
  grayXDark: "#404040",

  white: "#FFF",
  black: "#222",
  alpha: "4D",
};

const primary = {
  primaryLight: "#74A5EC",
  primary: "#0143A4",
  primaryDark: "#012965",
};
const callToAction = {
  callToActionDark: "#B85C00",
  callToAction: "#F07800",
  callToActionLight: "#FFC079",
  callToActionXLight: "#FFE8D3",
};

const feedbackColor = {
  successLight: "#ECF9F0",
  success: "#1E8F44",
  successDark: "#0A5C25",

  warningLight: "#FFF499",
  warning: "#A38D00",
  warningDark: "#4F4910",

  alertLight: "#FFD9D9",
  alert: "#C15D5D",
  alertDark: "#801919",
};

const brandColor = {
  whatsapp: "#075E54",
};

const color: BaseColor = {
  ...neutralColor,

  ...primary,

  ...callToAction,

  ...feedbackColor,

  ...brandColor,

  whiteTransparent: neutralColor.white + "a0",
  grayXDarkTransparent: neutralColor.grayXDark + "a0",
};

export const commonTheme: BaseTheme = {
  theme: "common",
  color,
  border: {
    radiusSmall: "4px",
    radius: "8px",
    radiusLarge: "12px",
    radiusXLarge: "16px",
    width: { medium: "1px", large: "2px" },
    color: neutralColor.grayLight,
  },
  fontSize: {
    xxSmall: "12px",
    xSmall: "14px",
    small: "16px",
    medium: "18px",
    large: "20px",
    xLarge: "22px",
  },
  iconSize: {
    xSmall: 8,
    small: 16,
    medium: 24,
    large: 32,
    xLarge: 40,
    xxLarge: 80,
  },
  spacing: {
    xSmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    xLarge: 32,
    gutter: 24,
    halfGutter: 16,
  },
  zIndex: {
    negative: -1,
    top: 1,
  },
};
