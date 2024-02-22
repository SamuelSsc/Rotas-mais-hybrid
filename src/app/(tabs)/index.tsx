import React from "react";
import MapView, { Marker, Overlay } from "react-native-maps";
import { VBox } from "@components";
import { UnitsSection } from "@components/home";
import { Dimensions } from "react-native";
import { CapacityLevel } from "@components/common/atm.badge";

export default function App() {
  const screen = Dimensions.get("window");
  const width = screen.width;

  return (
    <VBox vGrow noGutter>
      {/* Pegar a localização do usuário aqui */}
      <MapView
        style={{ height: "100%", width: width }}
        initialRegion={{
          latitude: -23.566063,
          longitude: -46.670729,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {MOCK.map((item) => (
          <Marker
            key={`${item.id}-${item.localName}`}
            coordinate={{
              latitude: item.coordinate.latitude,
              longitude: item.coordinate.longitude,
            }}
            title={item.localName}
            description={item.description}
          />
        ))}
      </MapView>

      <UnitsSection unitis={MOCK} />
    </VBox>
  );
}

const MOCK = [
  {
    id: "1",
    coordinate: {
      latitude: -23.556734,
      longitude: -46.656536,
    },
    localName: "TESTE-1",
    description: "lorem ipsum mocked for tcc unity of health ",
    variant: CapacityLevel.Close,
  },
  {
    id: "2",
    coordinate: {
      latitude: -23.56312,
      longitude: -46.65483,
    },
    localName: "TESTE-2",
    description:
      "Unidade de saude da vila Piriri, atendendo os clientes com os melhores funcionários e no melhor tempo possível, venha você tbm se tratar com a gente, o que acontece se tiver mais uma linha aqui no caso??",
    variant: CapacityLevel.Empty,
  },
  {
    id: "3",
    coordinate: {
      latitude: -23.566063,
      longitude: -46.670729,
    },
    localName: "TESTE-3",
    description: "MOCK FOR TCC",
    variant: CapacityLevel.Full,
  },
  {
    id: "4",
    coordinate: {
      latitude: -23.542502,
      longitude: -46.629965,
    },
    localName: "TESTE-4",
    description: "MOCK FOR TCC",
    variant: CapacityLevel.Medium,
  },
  {
    id: "5",
    coordinate: {
      latitude: -23.520425,
      longitude: -46.629969,
    },
    localName: "TESTE-5",
    description: "MOCK FOR TCC",
    variant: CapacityLevel.VeryFull,
  },
];
