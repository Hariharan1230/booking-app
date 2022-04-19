import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { SearchBar } from "../components/SearchBar";
import { ShopInfo } from "../components/shop-info-card";
import { Offers } from "../components/Offers";

const SearchBarView = styled(View)`
  padding: 16px;
  background-color: white;
`;

const ShopInfoView = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const ShopListScreen = () => {
  return (
    <>
      <SearchBarView>
        <SearchBar />
      </SearchBarView>
      <Offers />
      <ShopInfoView>
        <ShopInfo />
      </ShopInfoView>
    </>
  );
};
