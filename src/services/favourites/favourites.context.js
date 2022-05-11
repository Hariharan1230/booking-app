<<<<<<< HEAD
import React, { createContext, useState } from "react";
=======
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";
>>>>>>> b34d43d4dde2edbff096dc47305a735532ff1f7c

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
<<<<<<< HEAD
  const [favourites, setFavourites] = useState([]);

=======
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

>>>>>>> b34d43d4dde2edbff096dc47305a735532ff1f7c
  const add = (shop) => {
    setFavourites([...favourites, shop]);
  };

  const remove = (shop) => {
    const newFavourites = favourites.filter((x) => x.name !== shop.name);

    setFavourites(newFavourites);
  };
<<<<<<< HEAD
=======

  useEffect(() => {
    if (users) {
      loadFavourites(users.uid);
    }
  }, [users]);

  useEffect(() => {
    if (users) {
      storeFavourites(favourites, users.uid);
    }
  }, [favourites, users]);

>>>>>>> b34d43d4dde2edbff096dc47305a735532ff1f7c
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
<<<<<<< HEAD
=======
        setFavourites,
>>>>>>> b34d43d4dde2edbff096dc47305a735532ff1f7c
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
