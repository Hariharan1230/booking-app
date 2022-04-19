import React from "react";
import { StatusBar } from "react-native";
import { ShopListScreen } from "./src/features/shoplist/screens/ShopList.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #f2f2f2;
`;

export default function App() {
  return (
    <SafeArea>
      <StatusBar translucent backgroundColor="black" />
      <ShopListScreen />
    </SafeArea>
  );
}
