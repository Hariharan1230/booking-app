import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { ShopInfo } from "../../shoplist/components/shop-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { ShopList } from "../../shoplist/components/shop-list.styles";
const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Shop Details", { shop: item })}
      >
        <Spacer position="bottom" size="large">
          <ShopInfo shops={item} />
        </Spacer>
      </TouchableOpacity>
    );
  };
  return favourites.length ? (
    <SafeArea>
      <ShopList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <SafeArea>
      <Container>
        <Text center>No Favourites added</Text>
      </Container>
    </SafeArea>
  );
};
