import { Chip as ChipComponent } from "@rneui/base";
import React from "react";
import { VSeparator } from "../obj.grid";

interface ChipProps {
  text: string;
  selected?: boolean;
  onPress?: () => void;
}

export const Chip = ({ text, selected, onPress }: ChipProps) => {
  return (
    <>
      <ChipComponent
        type={selected ? "solid" : "outline"}
        title={text}
        iconRight={selected}
        icon={
          selected
            ? { name: "close", type: "font-awesome", color: "white", size: 12 }
            : null
        }
        onPress={onPress}
      >
        {text}
      </ChipComponent>
      <VSeparator spacing="small" />
    </>
  );
};
