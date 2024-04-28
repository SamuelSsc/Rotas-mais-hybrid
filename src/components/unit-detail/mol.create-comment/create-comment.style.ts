import { VBox } from "@components/common";
import { commonTheme } from "@constants/obj.theme";
import styled from "styled-components/native";

export const CreateCommentContainer = styled(VBox)`
  position: absolute;
  bottom: ${commonTheme.spacing.small}px;
  left: 0px;
  right: 0px;
`;
