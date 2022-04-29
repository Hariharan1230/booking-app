import React from "react";
import { Searchbar } from "react-native-paper";

export const SearchBar = ({ searchinfo }) => {



  return (
    <Searchbar
      placeholder="Search"
      onChangeText={searchinfo}

    />
  );
};
