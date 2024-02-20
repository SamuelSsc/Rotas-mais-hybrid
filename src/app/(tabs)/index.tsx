import React from "react";
import MapView, { Marker, UrlTile } from "react-native-maps";
import { VBox } from "@components";
// import SplashImg from "@assets/images/splash.png";

export default function App() {
  return (
    <VBox vGrow noGutter>
      {/* Pegar a localização do usuário aqui */}
      <MapView
        style={{ height: "100%", width: "100%" }}
        initialRegion={{
          latitude: -23.566063,
          longitude: -46.670729,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Criar um map aqui */}
        {MOCK.map((item) => (
          <Marker
            key={`${item.id}-${item.localName}`}
            coordinate={{
              latitude: item.coordinate.latitude,
              longitude: item.coordinate.longitude,
            }}
            title={item.localName}
            description={item.description}
            // image={SplashImg}
          />
        ))}
      </MapView>
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
    description: "MOCK FOR TCC",
  },
  {
    id: "2",
    coordinate: {
      latitude: -23.56312,
      longitude: -46.65483,
    },
    localName: "TESTE-2",
    description: "MOCK FOR TCC",
  },
  {
    id: "3",
    coordinate: {
      latitude: -23.566063,
      longitude: -46.670729,
    },
    localName: "TESTE-3",
    description: "MOCK FOR TCC",
  },
  {
    id: "4",
    coordinate: {
      latitude: -23.542502,
      longitude: -46.629965,
    },
    localName: "TESTE-4",
    description: "MOCK FOR TCC",
  },
];
