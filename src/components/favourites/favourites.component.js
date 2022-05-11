import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ shop }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

<<<<<<< HEAD
  const isFavourite = favourites.find((r) => r.placeId === shop.placeId);
=======
  const isFavourite = favourites.find((r) => r.name === shop.name);
>>>>>>> b34d43d4dde2edbff096dc47305a735532ff1f7c

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(shop) : removeFromFavourites(shop)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "red"}
      />
    </FavouriteButton>
  );
};
