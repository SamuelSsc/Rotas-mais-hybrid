import React from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import Container from "typedi";
import { APP_THEME, configTheme } from "@constants/obj.theme/config.theme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  configTheme();
  const theme = Container.get(APP_THEME);

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="unit-detail"
          options={{
            headerShown: true,
            //DARIA PRA PEGAR O NOME DA UNIDADE AQUI??
            title: "Detalhe da Unidade",
            headerBackTitle: "Voltar",
          }}
        />
        <Stack.Screen
          name="favorite"
          options={{ title: "Favoritos", presentation: "modal" }}
        />
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}
