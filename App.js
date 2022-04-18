import React from 'react';
import { StatusBar } from "react-native";
import { SearchListScreen } from './src/features/searchlist/screens/SearchList.screen';

export default function App() {

  return (
    <>
      <SearchListScreen />
      <StatusBar style='auto' />
    </>
  );
}


