import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SearchBar } from "../components/SearchBar";
import { ShopInfo } from "../components/shop-info-card";
import { Offers } from "../components/Offers";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ShopInfoView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const ShopListScreen = () => {
  return (
    <SafeArea>
      <SearchBarView>
        <SearchBar />
      </SearchBarView>
      <Offers />
      <ShopInfoView>
        <ShopInfo />
      </ShopInfoView>
    </SafeArea>
  );
};
