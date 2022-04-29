import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar } from "react-native";

import { Navigation } from "./src/infrastructure/navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { ShopsContextProvider } from "./src/services/shopDetails/shops.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor="black" />
        <ShopsContextProvider>
          <Navigation />
        </ShopsContextProvider>
      </ThemeProvider>
    </>
  );
}
