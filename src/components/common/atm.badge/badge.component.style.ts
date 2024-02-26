import { BaseColor } from "@constants/obj.theme";
import styled from "styled-components/native";

interface BadgeStyledProps {
  color: BaseColor;
}

export const BadgeStyled = styled.View<BadgeStyledProps>`
  padding-horizontal: ${(props) => props.theme.spacing.medium}px;
  padding-vertical: ${({ theme }) => theme.spacing.xSmall}px;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.color.primary};
  align-self: flex-start;
  justify-content: center;
  border-radius: ${({ theme }) => theme.border.radius}px;
`;

export const BadgeTextStyled = styled.Text<BadgeStyledProps>`
  background-color: ${(props) =>
    props.color ? props.color : props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.xSmall}px;
`;
