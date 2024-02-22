import React, { useRef, useState } from "react";
import MapView, { LatLng, Marker, Overlay } from "react-native-maps";
import { VBox } from "@components";
import { Unit, UnitsSection } from "@components/home";
import { Dimensions } from "react-native";
import { CapacityLevel } from "@components/common/atm.badge";
import { AnimatedMapView } from "react-native-maps/lib/MapView";

export default function App() {
  const screen = Dimensions.get("window");
  const width = screen.width;
  const mapRef = useRef<MapView>();

  const [_, setUnitSelected] = useState<Unit>(MOCK[0]);

  const handleUnitsChange = (data: Unit) => {
    setUnitSelected(data);
    mapRef?.current?.animateToRegion({
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
      latitude: data.coordinate.latitude,
      longitude: data.coordinate.longitude,
    });
  };

  return (
    <VBox vGrow noGutter>
      {/* Pegar a localização do usuário aqui */}
      <AnimatedMapView
        style={{ height: "100%", width: width }}
        initialRegion={{
          latitude: MOCK[0].coordinate.latitude,
          longitude: MOCK[0].coordinate.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        ref={mapRef}
      >
        {MOCK.map((item) => (
          // DAR UM DESTAQUE MAIOR PARA O MARKER QUE ESTIVER A ÁMOSTRA
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
      </AnimatedMapView>

      <UnitsSection unitis={MOCK} onUnitSelectedChange={handleUnitsChange} />
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
