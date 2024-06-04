import React from "react";
import { Image } from "react-native";
import PlaceHolderImage from "@assets/images/placeholder-avatar.png";
import PlaceHolderImage3 from "@assets/images/placeholder-avatar-3.png";
import PlaceHolderImage4 from "@assets/images/placeholder-avatar-2.png";
import PlaceHolderImage2 from "@assets/images/placeholder-avatar.jpg";
import { Body, H4, HBox, VSeparator } from "@components/common";
import { Divider } from "@rneui/base";

export const CommentsSection = () => {
  return (
    <>
      {Array.from({ length: 4 }, (_, index) => (
        <React.Fragment key={`comment-component-${index}`}>
          <VSeparator />

          <HBox>
            <HBox.Item vAlign="center" wrap>
              <Image
                source={
                  index === 0
                    ? PlaceHolderImage
                    : index === 1
                    ? PlaceHolderImage2
                    : index === 2
                    ? PlaceHolderImage3
                    : PlaceHolderImage4
                }
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
            </HBox.Item>
            <HBox.Separator size="small" />

            <HBox.Item>
              <H4>Usuário {index + 1}</H4>
              <Body>
                {index === 0
                  ? `Eu não recomendo esse hospital. Cheguei com uma dor intensa e tive que esperar mais de 3 horas para ser atendido. A sala de espera estava lotada e parecia que ninguém se importava com a urgência dos pacientes. Muito decepcionante!`
                  : index === 1
                  ? `Minha experiência no hospital foi horrível. O lugar estava superlotado e o tempo de espera foi inacreditável. Levei mais de 3 horas para ser atendido. O sistema precisa de uma revisão urgente para melhorar o atendimento.`
                  : index === 2
                  ? `É inaceitável esperar mais de 3 horas para ser atendido em um hospital. O lugar estava cheio e parecia desorganizado. Precisam contratar mais profissionais para dar conta da demanda e melhorar a eficiência do atendimento.`
                  : `Infelizmente, o atendimento nesse hospital deixa muito a desejar. Esperei mais de 3 horas para ser atendido em uma sala de espera lotada. Algo precisa ser feito para reduzir esses tempos de espera absurdos. Não recomendo!`}
              </Body>
            </HBox.Item>
          </HBox>
          <VSeparator />
          <Divider />
        </React.Fragment>
      ))}
    </>
  );
};
