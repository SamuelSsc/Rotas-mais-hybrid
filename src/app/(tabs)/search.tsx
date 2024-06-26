import { Input } from "@rneui/themed";
import React, { useState } from "react";

import { FlatList } from "react-native";
import { MOCK } from ".";
import { Button, H2, HBox, UnitItem, VBox, VSeparator } from "@components";
import { FontAwesome } from "@expo/vector-icons";
import { FilterBottomSheet } from "@components/common/filter-bottom-sheet";
import { mapBadge } from "@components/common/atm.badge";

export default function SearchScreen() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const handleFilter = () => {
    setIsVisible(true);
  };

  const Mock_Filtered = MOCK.filter((unit) =>
    selectedChips.length ? selectedChips.includes(mapBadge[unit.variant].text) : MOCK
  );

  return (
    <VBox vGrow style={{ paddingBottom: 130 }}>
      <VSeparator />

      <HBox>
        <HBox.Item>
          <Input label="Pesquisar Unidade de saúde:" />
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
        data={Mock_Filtered}
        renderItem={UnitItem}
        ItemSeparatorComponent={() => <VSeparator />}
        keyExtractor={(item) => item.id}
      />

      <FilterBottomSheet
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onFilterChange={setSelectedChips}
        selectedChips={selectedChips}
      />
    </VBox>
  );
}
