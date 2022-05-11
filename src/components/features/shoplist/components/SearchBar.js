import React from "react";
import { Searchbar } from "react-native-paper";

export const SearchBar = ({ isFavToggled, onFavToggle, searchinfo }) => {
  return (
    <Searchbar
      icon={isFavToggled ? "heart" : "heart-outline"}
      onIconPress={onFavToggle}
      placeholder="Search"
      onChangeText={searchinfo}
    />
  );
};
