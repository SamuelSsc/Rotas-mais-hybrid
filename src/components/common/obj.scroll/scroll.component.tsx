import * as React from "react";

import {
  findNodeHandle,
  RefreshControlProps,
  ScrollView,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  KeyboardAwareScrollStyled,
  ScrollStyled,
} from "./scroll.component.style";

export interface ScrollProps extends React.PropsWithChildren {
  keyboardAware?: boolean;
  keyboardShouldPersistTaps?: "handled" | "never" | "always";
  refreshControl?: React.ReactElement<RefreshControlProps>;
  isFlex?: boolean;
  testID?: string;
}

export interface ScrollRef extends React.ForwardRefExoticComponent<unknown> {
  scrollToComponent: (viewRef: React.RefObject<View>) => void;
}

export const Scroll = React.forwardRef(
  ({ keyboardAware, ...props }: ScrollProps, ref) => {
    const scrollView = React.useRef<ScrollView | KeyboardAwareScrollView>(
      undefined
    );

    const scrollTo = React.useCallback(
      (x: number, y: number) => {
        if (scrollView.current) {
          if (keyboardAware) {
            (scrollView.current as KeyboardAwareScrollView).scrollToPosition(
              x,
              y,
              true
            );
          } else {
            (scrollView.current as ScrollView).scrollTo({
              x,
              y,
              animated: true,
            });
          }
        }
      },
      [keyboardAware]
    );

    React.useImperativeHandle(
      ref,
      () => ({
        scrollToComponent: (viewRef: React.RefObject<View>) => {
          if (!viewRef?.current) {
            return;
          }
          if (scrollView.current) {
            viewRef.current.measureLayout(
              findNodeHandle(scrollView.current),
              (_x: number, y: number) => {
                scrollTo(0, y);
              },
              () => {
                console.warn("Error scrolling");
              }
            );
          }
        },
      }),
      [scrollTo]
    );

    if (keyboardAware) {
      return (
        <KeyboardAwareScrollStyled
          enableResetScrollToCoords={false}
          {...props}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
          ref={scrollView as React.Ref<KeyboardAwareScrollView>}
        />
      );
    } else {
      return (
        <ScrollStyled
          {...props}
          ref={scrollView as React.Ref<ScrollView>}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
        />
      );
    }
  }
);
