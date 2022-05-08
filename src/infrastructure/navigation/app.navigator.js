import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";
import { MapScreen } from "../../features/map/map.screen";
import { ShopsContextProvider } from "../../services/shopDetails/shops.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context"
import { SettingsNavigator } from "./settings.navigator";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <ShopsContextProvider>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsNavigator}
        //options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </ShopsContextProvider>
  </FavouritesContextProvider>
);
