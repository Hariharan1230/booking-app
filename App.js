import React from 'react';
import { StatusBar } from "react-native";
import { ShopListScreen } from './src/features/shoplist/screens/ShopList.screen';

export default function App() {

  return (
    <>
      <ShopListScreen />
      <StatusBar style='auto' />
    </>
  );
}


