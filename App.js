import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar } from "react-native";
import { initializeApp } from "firebase/app";

import { Navigation } from "./src/infrastructure/navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { ShopsContextProvider } from "./src/services/shopDetails/shops.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyCTbVpib5QnpgNZp3PVWF3sOIYGR5nFCXw",
  authDomain: "booking-app-16723.firebaseapp.com",
  projectId: "booking-app-16723",
  storageBucket: "booking-app-16723.appspot.com",
  messagingSenderId: "378046707721",
  appId: "1:378046707721:web:584beaac52af22bed960d8",
};

initializeApp(firebaseConfig);

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
        <FavouritesContextProvider>
          <StatusBar translucent backgroundColor="black" />
          <ShopsContextProvider>
            <Navigation />
          </ShopsContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
