import React from 'react';
import { StatusBar } from "react-native";
import { ShopListScreen } from './src/features/searchlist/screens/ShopList.screen';

export default function App() {

  return (
    <>
      <ShopListScreen />
      <StatusBar style='auto' />
    </>
  );
}


