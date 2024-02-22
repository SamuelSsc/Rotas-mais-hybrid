import { css } from 'styled-components/native';

export const ShadowCss = {
  Default: css`
    shadow-offset: 0 2px;
    shadow-opacity: 0.1;
    shadow-radius: 2px;
    elevation: 1;
  `,
  Top: css`
    elevation: 8;
    shadow-opacity: 0.2;
    shadow-offset: 0px -2px;
    shadow-radius: 2px;
    shadow-color: ${({ theme }) => theme.color.primary + theme.color.alpha};
  `,
  Bottom: css`
    elevation: 8;
    shadow-opacity: 0.5;
    shadow-offset: 0px 2px;
    shadow-radius: 2px;
    shadow-color: ${({ theme }) => theme.color.primary + theme.color.alpha};
  `,
};

export const TabBarShadow = {
  shadowOffset: {
    width: 0,
    height: -1,
  },
  shadowOpacity: 0.15,
  shadowRadius: 3,
  elevation: 20,
};

export const ButtonShadow = {
  shadowOpacity: 0.1,
  shadowRadius: 4,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  elevation: 2,
};
