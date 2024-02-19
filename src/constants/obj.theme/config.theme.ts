import Container, { Token } from "typedi";
import { BaseTheme } from "./theme.interface";
import { commonTheme } from "./common-theme";

export const APP_THEME = new Token<BaseTheme>("AppTheme");

export function configTheme() {
  const theme: BaseTheme = commonTheme;
  Container.set(APP_THEME, theme);
}
