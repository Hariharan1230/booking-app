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

export const ShopInfo = ({ shops = {} }) => {
  const {
    name = "Naturals",
    icon,
    photos = ["https://image3.mouthshut.com/images/imagesp/925106109s.jpeg"],
    address = "100 b west street",
    openingHours,
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = shops;

  const ratingArray = Array.from(new Array(Math.round(rating)));
  return (
    <StyledCard elevation={5}>
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
        <Text variant="caption">{address}</Text>
      </Info>
    </StyledCard>
  );
};
