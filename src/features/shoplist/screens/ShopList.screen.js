import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SearchBar } from "../components/SearchBar";
import { ShopInfo } from "../components/shop-info-card.component";
import { Offers } from "../components/Offers";
import { Spacer } from "../../../components/spacer/spacer";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const SearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const ShopListScreen = () => {
  return (
    <SafeArea>
      <SearchBarView>
        <SearchBar />
      </SearchBarView>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
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
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
