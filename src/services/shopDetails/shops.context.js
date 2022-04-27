import React, { useState, createContext, useEffect, useMemo } from "react";

import { shopDetailsRequest, shopDetailsEdit } from "./shops.services";

export const ShopsContext = createContext();

export const ShopsContextProvider = ({ children }) => {
  return (
    <ShopsContext.Provider
      value={{
        shop: [1, 2, 3],
      }}
    >
      {children}
    </ShopsContext.Provider>
  );
};
