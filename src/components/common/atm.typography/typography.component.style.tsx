import styled, { css } from "styled-components/native";

import {
  TextProps,
  TextVariant,
  TextVariantType,
} from "./text-variant.component";

interface TitleProps extends TextProps {
  mb?: boolean;
  center?: boolean;
}

export const HDisplay = styled.Text<{ center?: boolean }>`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.xLarge}px;
  ${(props) => props.center && "text-align: center;"}
`;

export const H1 = styled.Text.attrs({
  accessibilityRole: "header",
})<TitleProps>`
  color: ${(props) => props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.large}px;
  ${(props) => props.mb && `margin-bottom: ${props.theme.spacing.xSmall}px;`}
  ${(props) => props.center && "text-align: center;"}
`;

export const H2 = styled.Text.attrs({
  accessibilityRole: "header",
})<TitleProps>`
  color: ${(props) =>
    props.variant
      ? TextVariant(props.theme)[props.variant]
      : props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.medium}px;
  margin-bottom: ${(props) => props.theme.spacing.small}px;
  margin-top: ${(props) => props.theme.spacing.small}px;
`;

export const H3 = styled.Text.attrs({
  accessibilityRole: "header",
})<TitleProps>`
  color: ${(props) =>
    props.variant
      ? TextVariant(props.theme)[props.variant]
      : props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.small}px;
  ${(props) => props.mb && `margin-bottom: ${props.theme.spacing.xSmall}px;`}
  ${(props) => props.center && "text-align: center;"}
`;

export const H4 = styled.Text.attrs({
  accessibilityRole: "header",
})<TitleProps>`
  color: ${(props) => props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xSmall}px;
  ${(props) => props.mb && `margin-bottom: ${props.theme.spacing.xSmall}px;`}
  ${(props) => props.center && "text-align: center;"}
`;

export const Body = styled.Text<TextProps>`
  font-size: ${(props) => props.theme.fontSize.xSmall}px;
  color: ${(props) =>
    props.variant
      ? TextVariant(props.theme)[props.variant]
      : props.theme.color.grayXDark};
  ${(props) => props.center && "text-align: center;"}
`;

export const BodySecondary = styled.Text<TextProps>`
  color: ${(props) =>
    props.variant
      ? TextVariant(props.theme)[props.variant]
      : props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xxSmall}px;
  ${(props) => props.center && "text-align: center;"}
`;

export const Label = styled.Text<TextProps>`
  color: ${(props) =>
    props.variant
      ? TextVariant(props.theme)[props.variant]
      : props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xSmall}px;
  ${(props) => props.center && "text-align: center;"}
`;

interface InputLabelProps {
  hasError?: boolean;
  focus?: boolean;
}

export const InputLabel = styled.Text<InputLabelProps>`
  color: ${(props) =>
    props.hasError
      ? props.theme.color.alert
      : props.focus
      ? props.theme.color.primary
      : props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xxSmall}px;
`;

export const InputValueCss = css<InputLabelProps>`
  color: ${(props) =>
    props.hasError ? props.theme.color.alert : props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xSmall}px;
`;

export const InputValue = styled.Text<InputLabelProps>`
  ${InputValueCss}
`;

export const InputDisabled = styled.Text<InputLabelProps>`
  ${InputValueCss}
  color: ${(props) => props.theme.color.grayDark};
`;

export const InputPlaceholder = styled.Text<InputLabelProps>`
  ${InputValueCss}
  color: ${(props) => props.theme.color.grayDark};
`;

export const Caption = styled.Text<{ variant?: TextVariantType }>`
  color: ${(props) =>
    props.variant
      ? TextVariant(props.theme)[props.variant]
      : props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xxSmall}px;
`;

export const InputCaption = styled.Text`
  color: ${(props) => props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xxSmall}px;
`;

export const InputCaptionError = styled(InputCaption)`
  color: ${(props) => props.theme.color.alert};
`;

export const DT = styled.Text<TextProps>`
  color: ${(props) => props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xSmall}px;
`;

export const DD = styled.Text<TextProps>`
  color: ${(props) => props.theme.color.grayXDark};
  font-size: ${(props) => props.theme.fontSize.xSmall}px;
`;
