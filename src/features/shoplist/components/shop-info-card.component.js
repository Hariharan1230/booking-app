import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import isopen from "../../../../assets/isopen";
import { Text } from "../../../components/typography/text.component";
import {
  StyledCard,
  CardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
} from "./shop-info-card.styles";
import { Favourite } from "../../../components/favourites/favourites.component";

export const ShopInfo = ({ shops = {} }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    openingHours,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = shops;

  const ratingArray = Array.from(new Array(Math.round(rating)));
  return (
    <StyledCard elevation={5}>
      <Favourite shop={shops} />
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((e, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isOpenNow && <SvgXml xml={isopen} width={22} height={22} />}
          </SectionEnd>
        </Section>
        <Text variant="caption">{vicinity}</Text>
      </Info>
    </StyledCard>
  );
};
