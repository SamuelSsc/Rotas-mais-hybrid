import React from "react";

import { H1, Root, VBox, VSeparator } from "@components";

import { Comment } from "@components/unit-detail/mol.comment";

export default function CommentScreen() {
  return (
    <Root>
      <VBox bgColor>
        <VSeparator />
        <H1>Titulo da unidade</H1>
        <Comment />
      </VBox>
    </Root>
  );
}
