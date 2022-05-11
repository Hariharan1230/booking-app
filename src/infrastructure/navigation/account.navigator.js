import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="main"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="login"
      component={LoginScreen}
      options={{ headerShown: false, animationEnabled: false }}
    />
    <Stack.Screen
      name="register"
      component={RegisterScreen}
      options={{ headerShown: false, animationEnabled: false }}
    />
  </Stack.Navigator>
);
