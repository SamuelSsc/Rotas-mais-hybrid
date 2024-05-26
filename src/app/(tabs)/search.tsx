import { Input } from "@rneui/themed";
import React from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";
import { MOCK } from ".";
import { Button, HBox, UnitItem, VBox, VSeparator } from "@components";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchScreen() {
  return (
    <VBox>
      <VSeparator />

      <HBox>
        <HBox.Item>
          <Input label="Pesquisar Unidade de saude:" />
        </HBox.Item>
        <HBox.Item wrap>
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
          />
        </HBox.Item>
      </HBox>
      <FlatList
        data={MOCK}
        renderItem={UnitItem}
        ItemSeparatorComponent={() => <VSeparator />}
        keyExtractor={(item) => item.id}
      />
    </VBox>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
