import React from "react";

import {
  Background,
  BgOpacity,
  Containter,
  AuthButton,
} from "../components/auth.screen.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <Background>
      <BgOpacity />
      <Containter>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          Login
        </AuthButton>
        <Spacer position="top" size="large">
          <AuthButton
            icon="account-box-multiple-outline"
            mode="contained"
            onPress={() => navigation.navigate("register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </Containter>
    </Background>
  );
};
