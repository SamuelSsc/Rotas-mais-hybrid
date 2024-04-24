import React from "react";
import { Image } from "react-native";
import PlaceHolderImage from "@assets/images/placeholder-avatar.jpg";
import { Body, H4, HBox, VBox, VSeparator } from "@components/common";

export const Comment = () => {
  return (
    <>
      {new Array(3).map((_, i) => (
        <React.Fragment key={`comment-component-${i}`}>
          <VSeparator />

          <HBox>
            <HBox.Item vAlign="center" wrap>
              <Image
                source={PlaceHolderImage}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
            </HBox.Item>
            <HBox.Separator size="small" />

            <HBox.Item>
              <H4>User Name</H4>
              <Body>
                Meu comentário Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Obcaecati voluptate necessitatibus accusantium
                ab perferendis cupiditate optio rerum odio atque aliquam quia,
                nam iusto sit quas
              </Body>
            </HBox.Item>
          </HBox>
          <VSeparator />
        </React.Fragment>
      ))}
    </>
  );
};
