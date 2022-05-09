import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { ScrollView, View } from "react-native";
import {
  OuterContainer,
  ScrollViews,
  Background,
  BgOpacity,
  Container,
  AuthButton,
  AuthInput,
  ErrorContainer,
} from "../components/auth.screen.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

//https://www.youtube.com/watch?v=64czVA1Po8w drop down guide
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <Background>
      <BgOpacity />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} >
        <Container>
          <AuthInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer size="large">
            <AuthInput
              label="Contact Number"
              value={phoneNumber}
              textContentType="telephoneNumber"
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={(u) => setPhoneNumber(u)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="Name"
              value={name}
              textContentType="name"
              autoCapitalize="none"
              onChangeText={(u) => setName(u)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="Repeat Password"
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="Address"
              value={address}
              textContentType="fullStreetAddress"
              autoCapitalize="none"
              onChangeText={(p) => setAddress(p)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="State"
              value={state}
              textContentType="addressState"
              autoCapitalize="none"
              onChangeText={(p) => setState(p)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="City"
              value={city}
              textContentType="addressCity"
              autoCapitalize="none"
              onChangeText={(p) => setCity(p)}
            />
          </Spacer>

          {error && (
            <ErrorContainer size="large">
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="account-box-multiple-outline"
                mode="contained"
                onPress={() =>
                  onRegister(
                    email,
                    password,
                    repeatedPassword,
                    name,
                    address,
                    city,
                    state,
                    phoneNumber
                  )
                }
              >
                Register
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={colors.ui.secondary} />
            )}
          </Spacer>
          <Spacer size="large">
            <AuthButton
              icon="backspace-outline"
              onPress={() => navigation.goBack()}
            >
              Back
            </AuthButton>
          </Spacer>
        </Container>
      </ScrollView>
    </Background>
  );
};
