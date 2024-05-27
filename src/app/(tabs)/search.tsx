import { Input } from "@rneui/themed";
import React from "react";

import { FlatList } from "react-native";
import { MOCK } from ".";
import { Button, H2, HBox, UnitItem, VBox, VSeparator } from "@components";
import { FontAwesome } from "@expo/vector-icons";
import { FilterBottomSheet } from "@components/common/filter-bottom-sheet";

export default function SearchScreen() {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleFilter = () => {
    setIsVisible(true);
  };

  return (
    <VBox>
      <VSeparator />

      <HBox>
        <HBox.Item>
          <Input label="Pesquisar Unidade de saude:" />
        </HBox.Item>
        <HBox.Item wrap vAlign="center">
          <Button
            text="Filtrar"
            iconRight
            icon={
              <FontAwesome
                name="filter"
                color={"white"}
                size={16}
                style={{ marginLeft: 4 }}
              />
            }
            onPress={handleFilter}
          />
        </HBox.Item>
      </HBox>
      <FlatList
        data={MOCK}
        renderItem={UnitItem}
        ItemSeparatorComponent={() => <VSeparator />}
        keyExtractor={(item) => item.id}
      />
      <FilterBottomSheet isVisible={isVisible} setIsVisible={setIsVisible} />
    </VBox>
  );
}
