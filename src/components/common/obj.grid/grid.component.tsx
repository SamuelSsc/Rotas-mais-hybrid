import { FlexAlignType } from "react-native";
import styled from "styled-components/native";

interface BoxProps {
  hAlign?: FlexAlignType;
  vAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

interface RootProps {
  bgColor?: boolean;
}

export const Root = styled.View<RootProps>`
  background-color: ${({ bgColor, theme }) =>
    bgColor ? theme.color.accessoryBackground : theme.color.white};
  flex: 1;
`;

interface VBoxProps extends BoxProps {
  vGrow?: boolean;
  noGutter?: boolean;
  half?: boolean;
  bgColor?: boolean;
}

export const VBox = styled.View<VBoxProps>`
  justify-content: ${({ vAlign }) => vAlign || "flex-start"};
  align-items: ${({ hAlign }) => hAlign || "stretch"};
  padding-horizontal: ${({ noGutter, theme, half }) =>
    noGutter ? "0" : half ? theme.spacing.halfGutter : theme.spacing.gutter}px;
  ${({ bgColor, theme }) =>
    bgColor && `background-color: ${theme.color.grayLight};`}
  ${({ vGrow }) => vGrow && "flex-grow: 1;"}
`;

type Spacings = "half" | "xSmall" | "small" | "medium" | "large" | "xLarge";
const spacingMapper: Record<Spacings, string> = {
  half: "halfGutter",
  xSmall: "xSmall",
  small: "small",
  medium: "medium",
  large: "large",
  xLarge: "xLarge",
};

interface SeparatorProps {
  spacing?: Spacings;
}

export const VSeparator = styled.View<SeparatorProps>`
  height: ${({ spacing, theme }) =>
    spacing ? theme.spacing[spacingMapper[spacing]] : theme.spacing.gutter}px;
`;

interface HBoxProps {
  vGrow?: boolean;
  wrap?: boolean;
  flexWrap?: boolean;
}

const HBoxStyled = styled.View<HBoxProps>`
  flex-direction: row;
  align-content: flex-start;
  ${({ vGrow }) => vGrow && "flex-grow: 1;"}
  ${({ wrap }) => wrap && "flexWrap: wrap;"}
  ${({ flexWrap }) => flexWrap && `flex-wrap: wrap`}
`;

interface HBoxItemProps extends BoxProps {
  wrap?: boolean;
  double?: boolean;
}

const flex = (props: HBoxItemProps) => {
  const isFlex = props.double ? "flex: 2;" : "flex: 1;";
  return !props.wrap ? isFlex : "";
};

const HBoxItem = styled.View<HBoxItemProps>`
  ${flex}
  justify-content: ${({ vAlign }) => vAlign || "flex-start"};
  align-items: ${({ hAlign }) => hAlign || "stretch"};
`;

const HBoxSeparator = styled.View<SeparatorProps>`
  width: ${({ spacing, theme }) =>
    spacing ? theme.spacing[spacingMapper[spacing]] : theme.spacing.gutter}px;
`;

type HBoxType = typeof HBoxStyled & {
  Item: typeof HBoxItem;
  Separator: typeof HBoxSeparator;
};

export const HBox: HBoxType = HBoxStyled as any;
HBox.Item = HBoxItem;
HBox.Separator = HBoxSeparator;
