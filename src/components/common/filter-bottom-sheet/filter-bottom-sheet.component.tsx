import { BottomSheet, Divider, Icon, Slider } from "@rneui/base";
import React, { useState } from "react";
import { View } from "react-native";
import { Body, H2, H4 } from "../atm.typography";
import { StyleSheet } from "react-native";
import { HBox, VBox, VSeparator } from "../obj.grid";
import { commonTheme } from "@constants/obj.theme";
import { Chip } from "../atm.chip";
import { Button } from "../atm.button";

interface FilterBottomSheetProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FilterBottomSheet = ({
  isVisible,
  setIsVisible,
}: FilterBottomSheetProps) => {
  const [val, setVertValue] = useState(0);

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}
    >
      <View style={styles.container}>
        <VBox>
          <VSeparator spacing="small" />
          <H2>Filtrar por:</H2>
          <VSeparator spacing="small" />
        </VBox>
        <Divider />

        <VBox>
          <VSeparator />
          <H4>Distância:</H4>
          <Slider
            value={val}
            onValueChange={setVertValue}
            maximumValue={100}
            minimumValue={0}
            step={1}
            allowTouchTrack
            thumbStyle={{ height: 20, width: 20 }}
            thumbTintColor={commonTheme.color.primary}
          />

          <HBox>
            <HBox.Item hAlign="flex-start">
              <Body>0 KM</Body>
            </HBox.Item>
            <HBox.Separator />
            <HBox.Item hAlign="center">
              <Body>Atual: {val} KM</Body>
            </HBox.Item>
            <HBox.Separator />
            <HBox.Item hAlign="flex-end">
              <Body>100 Km</Body>
            </HBox.Item>
          </HBox>

          <VSeparator />
          <H4>Lotacão:</H4>
          <VSeparator spacing="small" />
          <HBox flexWrap>
            <HBox.Item wrap vAlign="center">
              <Chip text="Vazio" selected />
            </HBox.Item>
            <HBox.Separator spacing="small" />

            <HBox.Item wrap vAlign="center">
              <Chip text="Aceitável" selected />
            </HBox.Item>
            <HBox.Separator spacing="small" />

            <HBox.Item wrap vAlign="center">
              <Chip text="Cheio" />
            </HBox.Item>
            <HBox.Separator spacing="small" />

            <HBox.Item wrap vAlign="center">
              <Chip text="Muito cheio" />
            </HBox.Item>
            <HBox.Separator spacing="small" />

            <HBox.Item wrap vAlign="center">
              <Chip text="Fechado" />
            </HBox.Item>
          </HBox>
        </VBox>
        <Divider />
        <VSeparator />

        {/* AJUSTAR FUNCIONALIDADE DO BOTTOMSHEET */}
        <VBox>
          <HBox>
            <HBox.Item>
              <Button text="Cancelar" variant="secondary" />
            </HBox.Item>
            <HBox.Separator spacing="small" />
            <HBox.Item>
              <Button text="Aplicar" />
            </HBox.Item>
          </HBox>
        </VBox>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: 380,
  },
});
