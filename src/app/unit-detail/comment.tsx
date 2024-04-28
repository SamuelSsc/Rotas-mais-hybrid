import React from "react";

import { Button, H1, HBox, Root, VBox, VSeparator } from "@components";

import { CommentsSection } from "@components/unit-detail/mol.comment";
import { Input } from "@rneui/base";
import { commonTheme } from "@constants/obj.theme";

export default function CommentScreen() {
  return (
    <Root>
      <VBox bgColor>
        <VSeparator />
        <H1>Titulo da unidade</H1>
        <CommentsSection />
      </VBox>

      <VBox>
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
            <Button text=">" />
          </HBox.Item>
        </HBox>
      </VBox>
    </Root>
  );
}
