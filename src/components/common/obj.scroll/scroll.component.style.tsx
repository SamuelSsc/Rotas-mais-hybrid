import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";

interface ScrollStyledProps {
  isFlex?: boolean;
}

export const ScrollStyled = styled.ScrollView<ScrollStyledProps>`
  ${(props) => props.isFlex && "flex: 1;"}
`;

export const KeyboardAwareScrollStyled = ScrollStyled.withComponent(
  KeyboardAwareScrollView
);
