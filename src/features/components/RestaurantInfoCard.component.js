import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/svg/star";
import open from "../../../assets/svg/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RatingOpenSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Open = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant",
    address = "KG 10 Ave, KIgali, Rwanda",
    image = "https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=",
    isOpen = true,
    rating = 4,
    isClosedTemporary = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: image }} />
      <Info>
        <RestaurantTitle>{name}</RestaurantTitle>
        <RatingOpenSection>
          <Rating>
            {[...Array(Math.floor(rating))].map((_, i) => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Open>
            {isClosedTemporary && (
              <Text variant="label" style={{ color: "red", paddingRight: 10 }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {isOpen && <SvgXml xml={open} width={25} height={25} />}
          </Open>
        </RatingOpenSection>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
