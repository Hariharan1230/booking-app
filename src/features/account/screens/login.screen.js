import React, { useState, useContext } from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  Background,
  BgOpacity,
  Containter,
  AuthButton,
  AuthInput,
} from "../components/auth.screen.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext)
  return (
    <Background>
      <BgOpacity />
      <Containter>
        <AuthInput
          label="E-mail"
          returnKeyType="next"
          value={email}
          autoCompleteType="email"
          textContentType="emailAddress"
          keyBoardType="email-address"
          autoCapitalize="none"
          onTextChange={(input) => setEmail(input)}
        />
        <Spacer position="top" size="large">
          <AuthInput
            label="Password"
            returnKeyType="done"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onTextChange={(input) => setPassword(input)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}

        <Spacer position="top" size="large">
          <AuthButton
            icon="lock-open-outline"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </Containter>
    </Background>
  );
};
