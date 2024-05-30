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
                Meu comentário Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Obcaecati voluptate necessitatibus accusantium
                ab perferendis cupiditate optio rerum odio atque aliquam quia,
                nam iusto sit quas
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
