import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components/native";

import { SearchBar } from "../components/SearchBar";
import { ShopInfo } from "../components/shop-info-card.component";
import { Offers } from "../components/Offers";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../.././components/utility/safe-area.component";
import { ShopsContext } from "../../../services/shopDetails/shops.context";
const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
const ShopList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const ShopListScreen = () => {
  const shopContext = useContext(ShopsContext);
  console.log(shopContext);
  return (
    <SafeArea>
      <SearchBarView>
        <SearchBar />
      </SearchBarView>
      <ShopList
        data={shopContext.shop}
        renderItem={({ item, index }) => {
          return index === 0 ? (
            <Spacer position="bottom" size="large">
              <Offers />
            </Spacer>
          ) : (
            <Spacer position="bottom" size="large">
              <ShopInfo />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
