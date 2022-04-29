import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SearchBar } from "../components/SearchBar";
import { ShopInfo } from "../components/shop-info-card.component";
import { Offers } from "../components/Offers";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../.././components/utility/safe-area.component";
import { ShopsContext } from "../../../services/shopDetails/shops.context";

const SearchBarView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
const ShopList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const HomeScreen = ({ navigation }) => {
  const { shop, isLoading, error } = useContext(ShopsContext);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const filteredshop = shop.filter((shops) => {
    return shops.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const OffersList = () => (
    <Spacer position="bottom" size="large">
      <Offers />
    </Spacer>
  )
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
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchBarView>
        <SearchBar searchinfo={onChangeSearch} />
      </SearchBarView>
      <ShopList
        data={filteredshop}
        ListHeaderComponent={OffersList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
