import * as React from "react";

import { BadgeStyled, BadgeTextStyled } from "./badge.component.style";
import { commonTheme } from "@constants/obj.theme";

export interface BadgeProps {
  variant: CapacityLevel;
}

export const Badge: React.FC<BadgeProps> = (props) => (
  <BadgeStyled color={mapBadge[props.variant].color}>
    <BadgeTextStyled color={mapBadge[props.variant].color}>
      {mapBadge[props.variant].text}
    </BadgeTextStyled>
  </BadgeStyled>
);

export enum CapacityLevel {
  VeryFull = "VeryFull",
  Full = "Full",
  Close = "Close",
  Medium = "Medium",
  Empty = "Empty",
}

const mapBadge: Record<CapacityLevel, { color: string; text: string }> = {
  VeryFull: { color: commonTheme.color.alertDark, text: "Muito cheio" },
  Full: { color: commonTheme.color.alert, text: "Cheio" },
  Close: { color: commonTheme.color.black, text: "Fechado" },
  Medium: { color: commonTheme.color.callToAction, text: "Aceitável" },
  Empty: { color: commonTheme.color.success, text: "Vazio" },
};
