import React, { useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { VBox } from "@components";
import { Unit, UnitsSection } from "@components/home";
import { Dimensions } from "react-native";
import { CapacityLevel } from "@components/common/atm.badge";
import MapViewDirections, {
  MapDirectionsResponse,
} from "react-native-maps-directions";
import Mock_Image from "@assets/images/img_ubs_mock.jpg";
import Mock_Image2 from "@assets/images/Mock-Image-2.jpeg";
import Mock_Image3 from "@assets/images/Mock-Image-3.jpeg";
import Mock_Image4 from "@assets/images/Mock-Image-4.jpeg";
import { commonTheme } from "@constants/obj.theme";

export default function App() {
  const screen = Dimensions.get("window");
  const width = screen.width;
  const mapRef = useRef<MapView>();

  const [unitSelected, setUnitSelected] = useState<Unit>(MOCK[0]);
  const [directions, setDirections] = useState<MapDirectionsResponse>();
  const [going, setGoing] = useState(false);

  const handleUnitsChange = (data: Unit) => {
    setUnitSelected(data);
    mapRef?.current?.animateToRegion({
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
      latitude: data.coordinate.latitude,
      longitude: data.coordinate.longitude,
    });
  };

  const handleGo = () => {
    console.log("ESTá Indo");
    setGoing(true);
    mapRef?.current?.fitToCoordinates(directions?.coordinates, {
      edgePadding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    });
  };

  return (
    <VBox vGrow noGutter>
      <MapView
        style={{ height: "100%", width: width }}
        initialRegion={{
          latitude: MOCK[0].coordinate.latitude,
          longitude: MOCK[0].coordinate.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        ref={mapRef}
      >
        {going && (
          <MapViewDirections
            origin={MOCK[1].coordinate}
            destination={unitSelected.coordinate}
            apikey={"AIzaSyA1ne797VJiS63dznN5t6MyDzR19tYTnbI"}
            strokeColor={commonTheme.color.primaryDark}
            strokeWidth={7}
            onReady={(result) => {
              setDirections(result);
            }}
          />
        )}

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
      </MapView>

      {/* NESSE COMPONENTE AQUI MOSTRAR A DISTANCIA DAS UNIDADES DE SAÚDE para o
      local atual do user */}
      <UnitsSection
        unitis={MOCK}
        onUnitSelectedChange={handleUnitsChange}
        onGo={handleGo}
        going={going}
      />
    </VBox>
  );
}

export const MOCK = [
  {
    id: "1",
    coordinate: {
      latitude: -23.6592055,
      longitude: -46.7179325,
    },
    localName: "Hospital do Servidor Público Municipal",
    description:
      "Localizado na vibrante cidade de São Paulo, o Hospital do Servidor Público Municipal é um símbolo de dedicação e cuidado à saúde. Situado na Avenida 23 de Maio, nosso hospital combina tecnologia de ponta com uma equipe de profissionais altamente qualificados, prontos para oferecer o melhor atendimento possível.",
    variant: CapacityLevel.Close,
    image: Mock_Image2,
  },
  {
    id: "2",
    coordinate: {
      latitude: -23.6592055,
      longitude: -46.7179325,
    },
    localName: "Hospital Regional Sul",
    description:
      "Unidade de saude regional sul, atendendo os clientes com os melhores funcionários e no melhor tempo possível, venha você tambem se tratar com a gente.",
    variant: CapacityLevel.VeryFull,
    image: Mock_Image3,
  },
  {
    id: "3",
    coordinate: {
      latitude: -23.65924655,
      longitude: -46.7179325,
    },
    localName: "Hospital da Luz Unidade Avançada Barão do Rio Branco",
    description: "MOCK FOR TCC",
    variant: CapacityLevel.Full,
    image: Mock_Image,
  },
  {
    id: "4",
    coordinate: {
      latitude: -23.65961,
      longitude: -46.7159449,
    },
    localName: "Hospital tito de morais",
    description: "MOCK FOR TCC",
    variant: CapacityLevel.Medium,
    image: Mock_Image,
  },
  {
    id: "5",
    coordinate: {
      latitude: -23.6616906,
      longitude: -46.7222863,
    },
    localName: "Hospital da Santa Casa de Santo Amaro",
    description:
      "Localizado no coração de Santo Amaro, em São Paulo, o Hospital da Santa Casa de Santo Amaro é uma instituição renomada, conhecida pela tradição e excelência no atendimento à saúde.",
    variant: CapacityLevel.Empty,
    image: Mock_Image4,
  },
];
