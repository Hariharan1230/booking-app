import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const StyledCard = styled(Card)`
  background-color: white;
`;

const CardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
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
