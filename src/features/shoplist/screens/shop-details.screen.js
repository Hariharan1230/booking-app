import React from "react";

import { ShopInfo } from "../components/shop-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const ShopDetailScreen = ({ route }) => {
  const { shop } = route.params;
  return (
    <SafeArea>
      <ShopInfo shops={shop} />
    </SafeArea>
  );
};