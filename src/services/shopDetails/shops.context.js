import React, { useState, createContext, useEffect, useMemo } from "react";

import { shopDetailsRequest, shopDetailsEdit } from "./shops.services";

export const ShopsContext = createContext();

export const ShopsContextProvider = ({ children }) => {
  const [shop, setShop] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveData = () => {
    setisLoading(true);
    setTimeout(() => {
      shopDetailsRequest()
        .then(shopDetailsEdit)
        .then((results) => {
          setisLoading(false);
          setShop(results);
        })
        .catch((err) => {
          setError(err);
        });
    }, 1000);
  };
  useEffect(() => {
    retrieveData();
  }, []);
  return (
    <ShopsContext.Provider
      value={{
        shop,
        isLoading,
        error,
      }}
    >
      {children}
    </ShopsContext.Provider>
  );
};
