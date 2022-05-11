import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { HomeScreen } from "../../features/shoplist/screens/Home.screen";
import { ShopDetailScreen } from "../../features/shoplist/screens/shop-details.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ ...TransitionPresets.RevealFromBottomAndroid }}
    >
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Shop Details" component={ShopDetailScreen} />
    </HomeStack.Navigator>
  );
};
