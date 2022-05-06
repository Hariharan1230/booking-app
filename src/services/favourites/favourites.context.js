import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { users } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const storeFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (shop) => {
    setFavourites([...favourites, shop]);
  };

  const remove = (shop) => {
    const newFavourites = favourites.filter((x) => x.name !== shop.name);

    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (users) {
      loadFavourites(users.uid);
    }
  }, [users]);

  useEffect(() => {
    if (users) {
      storeFavourites(favourites, users.uid);
    }
    ;
  }, [favourites, users]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        setFavourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
