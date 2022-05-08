import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components/native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { ActivityIndicator, Colors } from "react-native-paper";

export const Navigation = ({ u }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);
  const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
  `;
  const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
  `;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <Loading size="large" animating={true} color={Colors.red800} />
      </LoadingContainer>
    );
  } else {
    return (
      <SafeArea>
        <NavigationContainer>
          {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
        </NavigationContainer>
      </SafeArea>
    );
  }
};
