import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

const WIDTH = Math.floor(Dimensions.get("screen").width);
const HEIGHT = Math.floor(Dimensions.get("screen").height);
console.log(HEIGHT - HEIGHT * 0.936);
export const Background = styled.ImageBackground.attrs({
  source: require("../../../../assets/bgimg1.jpg"),
  resizeMode: "cover",
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BgOpacity = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(178, 226, 226, 0.2);
`;

export const Containter = styled.View`
  background-color: rgba(178, 226, 226, 0.5);
  padding: ${(props) => props.theme.space[5]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  labelStyle: { color: colors.ui.secondary },
  mode: "contained"
})`
  padding: ${(props) => props.theme.space[1]};
`;

export const AuthInput = styled(TextInput).attrs({
  mode: "outlined",
})`
  width: ${WIDTH - 110}px;
`;
