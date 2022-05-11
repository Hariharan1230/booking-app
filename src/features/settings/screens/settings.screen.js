import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;
const Container = styled.View`
  padding: ${(props) => props.theme.space[4]};
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, users, error } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Container>
        <Avatar.Image
          size={140}
          source={require("../../../../assets/avatar.png")}
          backgroundColor={colors.ui.tertiary}
        />
        <Spacer position="top" size="large">
          <Text variant="label">{users.email}</Text>
        </Spacer>
      </Container>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
