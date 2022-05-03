import React from "react";
import { Text } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="main"
      component={() => <Text>oo</Text>}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="login"
      component={() => <Text>oo</Text>}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
