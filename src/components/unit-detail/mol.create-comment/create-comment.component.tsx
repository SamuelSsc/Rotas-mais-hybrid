import { Button, HBox, VBox, VSeparator } from "@components/common";
import { commonTheme } from "@constants/obj.theme";
import { Input } from "@rneui/base";
import React from "react";
import { CreateCommentContainer } from "./create-comment.style";
import { FontAwesome } from "@expo/vector-icons";

export const CreateComment = () => {
  return (
    <CreateCommentContainer>
      <VSeparator />
      <HBox>
        <HBox.Item>
          <Input
            placeholder="Deixe seu comentário"
            labelStyle={{ fontSize: 12, color: commonTheme.color.grayXDark }}
          />
        </HBox.Item>
        <HBox.Separator />

        <HBox.Item wrap>
          <Button text="" icon={<Icon />} iconRight />
        </HBox.Item>
      </HBox>
    </CreateCommentContainer>
  );
};

const Icon = () => {
  return (
    <FontAwesome name={"send"} size={25} color={commonTheme.color.white} />
  );
};
