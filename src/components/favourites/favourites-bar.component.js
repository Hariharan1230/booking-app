import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { CompactShopInfo } from "../shops/compact-shop-info.component";

const BarWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ onNavigate, favourites }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <BarWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((shop) => {
          const key = shop.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("Shop Details", { shop })}
              >
                <CompactShopInfo shop={shop} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </BarWrapper>
  );
};
