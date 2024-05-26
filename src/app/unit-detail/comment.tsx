import React from "react";

import { H1, Root, VBox, VSeparator } from "@components";

import { CommentsSection } from "@components/unit-detail/mol.comment-section";
import { CreateComment } from "@components/unit-detail/mol.create-comment";

export default function CommentScreen() {
  return (
    <Root>
      <VBox bgColor>
        <VSeparator />
        <H1>Hospital Regional Sul</H1>
        <CommentsSection />
      </VBox>

      <CreateComment />
    </Root>
  );
}
