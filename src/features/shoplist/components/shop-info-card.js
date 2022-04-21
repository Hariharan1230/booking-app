import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading}
  padding: ${(props) => props.theme.space[3]};
`;

export const ShopInfo = ({ shops = {} }) => {
  const {
    name = "Naturals",
    icon,
    photos = ["https://image3.mouthshut.com/images/imagesp/925106109s.jpeg"],
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = shops;

  return (
    <>
      <StyledCard elevation={5}>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </StyledCard>
    </>
  );
};
